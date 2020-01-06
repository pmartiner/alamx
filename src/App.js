import React, { Component } from 'react';
import HeaderContainer from './components/Header/Header-container';
import LandingContainer from './components/Landing/Landing-container';
import FooterView from './components/Footer/Footer-view';
import LoginContainer from './components/Login/Login-container';
import RegisterContainer from './components/Register/Register-container';
import CatalogContainer from './components/Catalog/Catalog-container';
import CartContainer from './components/Cart/Cart-container';
import OrdersContainer from './components/Orders/Orders-container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import PaymentContainer from './components/Payment/Payment-container';
import PayedContainer from './components/Payed/Payed-container';


class App extends Component {
  state = {
    isLoggedIn: false,
    shoppingCart: {
      cantidadItems: 0,
      items: []
    },
    user: {},
    rememberMe: false
  }

  login(userLogged, remember, id) {
    const userData = {
      ...userLogged,
      id_usuario: id
    }
    this.setState({
      user: { 
        ...userData,
      },
      rememberMe: remember,
      isLoggedIn: true
    })

    if(remember) {
      localStorage.setItem("isLoggedIn", remember);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify({
        ...userLogged,
        id_usuario: id
      }));
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }

  session(){
    const cachedUser = localStorage.getItem('user');
    if (cachedUser !== null) {
      this.setState({
         user: cachedUser,
         isLoggedIn: true 
      });
    }
  }

  emptyCart = () => {
    this.setState({
      shoppingCart: {
        cantidadItems: 0,
        items: []
      },
    })
  }

  addToCart = (prod) => {
    let auxCart = {...this.state.shoppingCart};

    if(auxCart.items.findIndex(elem => elem.nombre === prod.nombre) === -1)
      auxCart.items.push(prod);
    else {
      let i = auxCart.items.findIndex(elem => elem.nombre === prod.nombre);
      auxCart.items[i].precioTotal += prod.precio
      auxCart.items[i].cantidad += 1;
    }

    let auxCant = 0;
    auxCart.items.forEach(elem => auxCant += elem.cantidad);
    auxCart.cantidadItems = auxCant;

    localStorage.setItem("shoppingCart", JSON.stringify(auxCart))

    this.setState({
      shoppingCart: auxCart
    });
  }

  removeFromCart = (prod) => {
    let auxCart = {...this.state.shoppingCart};

    let i = auxCart.items.findIndex(elem => elem.nombre === prod.nombre);
    if(i !== -1) {
      auxCart.items[i].precioTotal -= prod.precio
      auxCart.items[i].cantidad -= 1;
      --auxCart.cantidadItems;
      if(auxCart.items[i].cantidad === 0)
        auxCart.items.splice(i, 1);
    }
    localStorage.setItem("shoppingCart", JSON.stringify(auxCart))

    this.setState({
      shoppingCart: auxCart
    });
  }

  componentDidMount() {
    const shopping = localStorage.getItem("shoppingCart");
    const user = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(shopping !== null) {
      let shop = JSON.parse(shopping);
      
      this.setState({
        shoppingCart: shop
      });
    }

    if(user !== null) {
      let userLog = JSON.parse(user);
      
      this.setState({
        user: userLog,
        isLoggedIn: loggedIn
      });
    }

  }

  render() {
    let switches = [
      <Route key="home" exact path="/" render={() => <LandingContainer/>}/>,
      <Route key="payed_g" path="/payed" render={() => <PayedContainer emptyCart={this.emptyCart} />}/>,
      <Route key="paym_g"  path="/payment" render={() => <PaymentContainer shoppingCart={this.state.shoppingCart} isLoggedIn={ this.state.isLoggedIn }/>}/>,
      <Route key="regi" path="/register" render={ ()=> <RegisterContainer /> }/>,
      <Route key="cata" path="/catalog" render={() => <CatalogContainer isLoggedIn={this.state.isLoggedIn} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
      <Route key="logi" path="/userLogin" render={() => <LoginContainer login={ (user, remember, id) => {this.login(user, remember, id)} } />}/>,
      <Route key="cart" render={() => <CartContainer shoppingCart={ this.state.shoppingCart } isLoggedIn={this.state.isLoggedIn} removeFromCart={(prod) => {this.removeFromCart(prod)}} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
      <Route key="homeDefault" render={() => <LandingContainer/>}/>
    ]

    if(this.state.isLoggedIn)
      switches = [
        <Redirect key="redi" exact from="/userLogin" to="/" />,
        <Route key="homey" exact path="/" render={() => <LandingContainer/>}/>,
        <Route key="paym" path="/orders" render={() => <OrdersContainer user={this.state.user} />}/>,
        <Route key="payed" path="/payed" render={() => <PayedContainer emptyCart={this.emptyCart} />}/>,
        <Route key="paym" path="/payment" render={() => <PaymentContainer shoppingCart={this.state.shoppingCart} user={this.state.user} isLoggedIn={ this.state.isLoggedIn }/>}/>,
        <Route key="perfi" path="/perfil" component={RegisterContainer}/>,
        <Route key="catal" path="/catalog" render={() => <CatalogContainer isLoggedIn={this.state.isLoggedIn} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
        <Route key="carti" path="/cart" render={() => <CartContainer shoppingCart={ this.state.shoppingCart } isLoggedIn={this.state.isLoggedIn} removeFromCart={(prod) => {this.removeFromCart(prod)}} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
        <Route key="homeDefaultLoggedIn" render={() => <LandingContainer/>}/>
      ]

    return (
      <Router>
          <div>
            <div className="App">
              <HeaderContainer isLoggedIn={ this.state.isLoggedIn } shoppingCart={ this.state.shoppingCart } logout={this.logout.bind(this)} user={ this.state.user }/>
                <Switch>
                  { switches }
                </Switch>
              <FooterView/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
