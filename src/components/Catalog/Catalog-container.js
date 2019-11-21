import React, { Component } from 'react';
import CatalogView from './Catalog-view';

class CatalogContainer extends Component {
    state = {
        
    }

    render() {
        return(
            <CatalogView addToCart={ this.props.addToCart }/>
        );    
    }
}

export default CatalogContainer; 