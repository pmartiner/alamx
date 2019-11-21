import React, { Component } from 'react';
import CartView from './Cart-view';

class CartContainer extends Component {
    state = {
        
    }

    render() {
        return(
            <CartView shoppingCart={ this.props.shoppingCart } addToCart={ this.props.addToCart } removeFromCart={ this.props.removeFromCart }/>
        );    
    }
}

export default CartContainer; 