import React, { Component } from 'react';
import LoginView from './Login-view';
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";

let login = false;
class LoginContainer extends Component {
    state = {
        user: {
            email: "",
            pw: "",
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

    apiLogin = () => {
        let empty = false

        if(this.state.user.email === "" || this.state.user.pw === "")
            empty = true;
            this.setState({
                isEmpty: true
            })
        if(this.state.user.email !== "" || this.state.user.pw !== "") {
            this.setState({ isEmpty: false })
            
        }
        if(!empty) {
            
            const i = this.props.users.findIndex(elem => elem.email === this.state.user.email);
            console.log(i)
            if(i === -1 || this.props.users[i].pw !== this.state.user.pw)
                this.setState({hasErrors: true})
            else if(this.props.users[i].pw === this.state.user.pw && i !== -1) {
                login = true;
                this.setState({
                    hasErrors: false,
                    loggedIn: true
                })
                this.props.login(this.props.users[i], this.state.remember);
            }
        }
        
        
    }

    render() {
        if(login)
            return(<Redirect to="/"/>)
        return(
            <LoginView hasErrors={this.state.hasErrors} isEmpty={this.state.isEmpty} apiLogin={this.apiLogin} handleInputChange={(e, val) => {this.handleInputChange(e, val)}}/>
        );
    }
}

export default LoginContainer; 