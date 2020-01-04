import React, { Component } from 'react';
import CatalogView from './Catalog-view';
import api from '../../utils/api/api';

class CatalogContainer extends Component {
    mounted = true;
    state = {
        catalog: [],
        loading: true
    }

    componentDidMount() {
        api.getAllProductos()
            .then(data => {
                if (this.mounted)
                    this.setState({
                        catalog: [...data.findAllResponse.return],
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
            <CatalogView addToCart={ this.props.addToCart } catalog={this.state.catalog}/>
        );    
    }
}

export default CatalogContainer; 