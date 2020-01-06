import React, { Component } from 'react';
import OrdersView from './Orders-view';
import api from '../../utils/api/api';

class OrdersContainer extends Component {
    mounted = true;
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        api.ordersByUser(1)
            .then(data => {
                if (this.mounted)
                    this.setState({
                        orders: [...data.pedidosPorUsuarioResponse.return],
                        loading: false
                    })
            });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        if(this.state.loading)
            return(<h3 className="rifle-green-text">Cargando...</h3>)
        return(
            <OrdersView orders={ this.state.orders }/>
        );    
    }
}

export default OrdersContainer; 