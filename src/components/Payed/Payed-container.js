import React, { Component } from 'react';
import PayedView from './Payed-view';

class PayedContainer extends Component {
    componentDidMount() {
        this.props.emptyCart();
    }

    render() {
        return(
            <PayedView/>
        );    
    }
}

export default PayedContainer; 