import React, { Component } from 'react';
import LoginView from './Login-view';
import update from 'immutability-helper';
import api from '../../utils/api/api';

class LoginContainer extends Component {
    state = {
        user: {
            correo: "",
            contrasena: "",
        },
        hasErrors: false,
        isEmpty: false,
        loggedIn: false,
        remember: false
    }

    handleInputChange(e, val){
        if(typeof(e.target) !== "undefined" && e.target.type === 'checkbox'){
            var valu;
            if(e.target.checked)
              valu = true;
            else
              valu = false;
            this.setState({
              remember: valu
            });
          }
        else
            if(this.state.isEmpty || this.state.hasErrors)
                this.setState({
                    isEmpty: false,
                    hasErrors: false,
                    user: update(this.state.user, {[val]: {$set: e}})
                });
            else
                this.setState({
                    user: update(this.state.user, {[val]: {$set: e}})
                });
    }

    apiLogin = (e) => {
        e.preventDefault();
        let empty = false

        if(this.state.user.correo === "" || this.state.user.contrasena === "")
            empty = true;
            this.setState({
                isEmpty: true
            })
        if(this.state.user.correo !== "" || this.state.user.contrasena !== "") {
            this.setState({ isEmpty: false })
        }
        if(!empty) {
            api.login(this.state.user)
                .then((data) => {
                    if(data.loginResponse.return.content === -1)
                        this.setState({ hasErrors: true });
                    else {
                        this.props.login(this.state.user, this.state.remember, data.loginResponse.return.content);
                    }
                        
                })
        }
        
        
    }

    render() {
        return(
            <LoginView hasErrors={this.state.hasErrors} isEmpty={this.state.isEmpty} apiLogin={e => this.apiLogin(e)} handleInputChange={(e, val) => {this.handleInputChange(e, val)}}/>
        );
    }
}

export default LoginContainer; 