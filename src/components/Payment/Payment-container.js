import React, { Component } from 'react';
import PaymentView from './Payment-view';
import { Redirect } from "react-router-dom";

class PaymentContainer extends Component {
    state = {
        pagado: false
    }

    pagar = () => {
        this.setState({
            pagado: true
        });
        localStorage.removeItem("shoppingCart")
    }

    render() {
        if(this.state.pagado)
            return <Redirect to="/payed"/>
        return(
            <PaymentView loggedIn={ this.props.isLoggedIn } pagar={this.pagar.bind(this)} shoppingCart={ this.props.shoppingCart }/>
        );
    }
}

export default PaymentContainer; 