import React, { Component } from 'react';
import HeaderView from './Header-view';

class HeaderContainer extends Component {
    state = {
        
    }

    render() {
        if(!this.props.isLoggedIn) 
            return(
                <HeaderView shoppingCart={ this.props.shoppingCart }/>
            );
        else
            return(
                <HeaderView user={ this.props.user } shoppingCart={ this.props.shoppingCart } logout={ this.props.logout }/>
            );    
    }
}

export default HeaderContainer; 