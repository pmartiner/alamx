import React, { Component } from 'react';
import LandingView from './Landing-view';

class LandingContainer extends Component {
    state = {
        hola: ""
    }

    render() {
        return(
            <LandingView/>
        );
    }
}

export default LandingContainer; 