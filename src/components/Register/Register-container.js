import React, { Component } from 'react';
import RegisterView from './Register-view';
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";

class RegisterContainer extends Component {
    state = {
        user: {
            nombre: "",
            apellidos: "",
            email: "",
            telefono: "",
            pw: "",
            calle: "",
            numExterior: "",
            numInterior: "",
            colonia: "",
            municipio: "",
            cp: "",
            ciudad: "",
            estado: ""
        },
        registered: false,
        hasErrors: false
    }

    handleInputChange(e, val){
        if(this.state.hasErrors)
            this.setState({
                hasErrors: false,
                user: update(this.state.user, {[val]: {$set: e}})
            });
        else
            this.setState({
                user: update(this.state.user, {[val]: {$set: e}})
            });
    }

    apiRegister = () => {
        if(this.state.user.nombre === "" ||
           this.state.user.apellidos === "" ||
           this.state.user.email === "" ||
           this.state.user.telefono === "" ||
           this.state.user.pw === "" ||
           this.state.user.calle === "" ||
           this.state.user.numExterior === "" ||
           this.state.user.colonia === "" ||
           this.state.user.municipio === "" ||
           this.state.user.cp === "" ||
           this.state.user.ciudad === "" ||
           this.state.user.estado === ""
        )
            this.setState({
                hasErrors: true
            })
        if(this.state.user.nombre !== "" &&
            this.state.user.apellidos !== "" &&
            this.state.user.email !== "" &&
            this.state.user.telefono !== "" &&
            this.state.user.pw !== "" &&
            this.state.user.calle !== "" &&
            this.state.user.numExterior !== "" &&
            this.state.user.colonia !== "" &&
            this.state.user.municipio !== "" &&
            this.state.user.cp !== "" &&
            this.state.user.ciudad !== "" &&
            this.state.user.estado !== "") {
            this.setState({registered: true})
            this.props.addUser(this.state.user);
        }
    }

    render() {
        if(!this.state.hasErrors && this.state.registered) {
            return <Redirect to="/login"/> 
        }
        console.log(this.state)
        return(
            <RegisterView hasErrors={this.state.hasErrors} apiRegister={this.apiRegister} handleInputChange={(e, val) => {this.handleInputChange(e, val)}}/>
        );
    }
}

export default RegisterContainer; 