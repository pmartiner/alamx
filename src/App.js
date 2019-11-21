import React, { Component } from 'react';
import HeaderContainer from './components/Header/Header-container';
import LandingContainer from './components/Landing/Landing-container';
import FooterView from './components/Footer/Footer-view';
import LoginContainer from './components/Login/Login-container';
import RegisterContainer from './components/Register/Register-container';
import CatalogContainer from './components/Catalog/Catalog-container';
import CartContainer from './components/Cart/Cart-container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import PaymentContainer from './components/Payment/Payment-container';
import PayedView from './components/Payed/Payed-view';


class App extends Component {
  state = {
    isLoggedIn: false,
    shoppingCart: [],
    users: [],
    user: {},
    rememberMe: false,
    input: {
      email: "",
      pw: ""
    }
  }

  addUser = user => {
    let newUser = {...user};
    let auxUsers = [...this.state.users];

    auxUsers.push(newUser);
    localStorage.removeItem("user");
    localStorage.setItem("users", JSON.stringify(auxUsers));
    this.setState({
      users: auxUsers
    })
  }

  login(userLogged, remember) {
    this.setState({
      user: userLogged,
      rememberMe: remember,
      isLoggedIn: true
    })

    if(remember) {
      localStorage.setItem("isLoggedIn", remember);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(userLogged));
      console.log("session")
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
      console.log('sessioned')
      this.setState({
         user: cachedUser,
         isLoggedIn: true 
      });
    }
  }

  

  addToCart = (prod) => {
    let auxCart = [...this.state.shoppingCart];

    if(auxCart.findIndex(elem => elem.nombre === prod.nombre) === -1)
      auxCart.push(prod);
    else {
      let i = auxCart.findIndex(elem => elem.nombre === prod.nombre);
      auxCart[i].precioTotal += prod.precio
      auxCart[i].cantidad += 1;
    }

    localStorage.setItem("shoppingCart", JSON.stringify(auxCart))

    this.setState({
      shoppingCart: auxCart
    });
  }

  removeFromCart = (prod) => {
    let auxCart = [...this.state.shoppingCart];

    let i = auxCart.findIndex(elem => elem.nombre === prod.nombre);
    if(i !== -1) {
      auxCart[i].precioTotal -= prod.precio
      auxCart[i].cantidad -= 1;
      if(auxCart[i].cantidad === 0)
        auxCart.splice(i, 1);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(auxCart))

    this.setState({
      shoppingCart: auxCart
    });
  }

  componentDidMount() {
    const shopping = localStorage.getItem("shoppingCart");
    const users = localStorage.getItem("users");
    const user = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("isLoggedIn");
    console.log(loggedIn)
    if(shopping !== null) {
      let shop = JSON.parse(shopping);
      
      this.setState({
        shoppingCart: shop
      });
    }

    
    if(users !== null) {
      let allUsers = JSON.parse(users);
      
      this.setState({
        users: allUsers
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
    console.log(this.state.users)
    let switches = [
      <Route key="home" exact path="/" render={() => <LandingContainer/>}/>,
      <Route key="payed_g" path="/payed" render={() => <PayedView/>}/>,
      <Route key="paym_g"  path="/payment" render={() => <PaymentContainer shoppingCart={this.state.shoppingCart} isLoggedIn={ this.state.isLoggedIn }/>}/>,
      <Route key="regi" path="/register" render={ ()=> <RegisterContainer addUser={ (user) => {this.addUser(user)} }/> }/>,
      <Route key="cata" path="/catalog" render={() => <CatalogContainer isLoggedIn={this.state.isLoggedIn} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
      <Route key="logi" path="/login" render={() => <LoginContainer login={ (user, remember) => {this.login(user, remember)} } users={this.state.users}/>}/>,
      <Route key="cart" render={() => <CartContainer shoppingCart={ this.state.shoppingCart } isLoggedIn={this.state.isLoggedIn} removeFromCart={(prod) => {this.removeFromCart(prod)}} addToCart={(prod) => {this.addToCart(prod)}} />}/>
      
    ]

    if(this.state.isLoggedIn)
      switches = [
        <Redirect key="redi" exact from="/login" to="/" />,
        <Route key="homey" exact path="/" render={() => <LandingContainer/>}/>,
        <Route key="payed" path="/payed" render={() => <PayedView/>}/>,
        <Route key="paym" path="/payment" render={() => <PaymentContainer shoppingCart={this.state.shoppingCart} isLoggedIn={ this.state.isLoggedIn }/>}/>,
        <Route key="perfi" path="/perfil" component={RegisterContainer}/>,
        <Route key="catal" path="/catalog" render={() => <CatalogContainer isLoggedIn={this.state.isLoggedIn} addToCart={(prod) => {this.addToCart(prod)}} />}/>,
        <Route key="carti" path="/cart" render={() => <CartContainer shoppingCart={ this.state.shoppingCart } isLoggedIn={this.state.isLoggedIn} removeFromCart={(prod) => {this.removeFromCart(prod)}} addToCart={(prod) => {this.addToCart(prod)}} />}/>
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
