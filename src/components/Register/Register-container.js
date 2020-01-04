import React, { Component } from 'react';
import RegisterView from './Register-view';
import update from 'immutability-helper';
import { Redirect } from "react-router-dom";
import api from '../../utils/api/api';

class RegisterContainer extends Component {
    state = {
        user: {
            nombres: '',
            apellidos: '',
            telefono: '',
            correo: '',
            contrasena: '',
            calle: '',
            num_ext: 0,
            num_in: 0,
            colonia: '',
            municipio: '',
            cp: 0,
            ciudad: '',
            estado: ''
        },
        registered: false,
        hasErrors: false,
        invalidData: false,
        emailExists: false
    }

    handleInputChange(e, val){
        const {
            hasErrors,
            emailExists,
            invalidData
        } = this.state;
        if(hasErrors || emailExists || invalidData)
            this.setState({
                hasErrors: false,
                invalidData: false,
                emailExists: false,
                user: update(this.state.user, {[val]: {$set: e}})
            });
        else if (!hasErrors && !emailExists && !invalidData)
            this.setState({
                user: update(this.state.user, {[val]: {$set: e}})
            });
    }

    isInt = (value) => {
        let x;
        if (isNaN(value)) {
            return false;
        }
        x = parseFloat(value);
        return (x | 0) === x;
    }

    apiRegister = (e) => {
        e.preventDefault();
        const {
            nombres,
            apellidos,
            telefono,
            correo,
            contrasena,
            calle,
            num_ext,
            num_in,
            colonia,
            municipio,
            cp,
            ciudad,
            estado,
        } = this.state.user;
        const { 
            hasErrors,
            invalidData
        } = this.state;

        if( nombres === '' ||
            apellidos === '' ||
            telefono === '' ||
            correo === '' ||
            contrasena === '' ||
            calle === '' ||
            num_ext === 0 ||
            colonia === '' ||
            municipio === '' ||
            cp === 0 ||
            ciudad === '' ||
            estado === ''
        )
            this.setState({
                hasErrors: true
            })
        else if((num_ext !== 0 ||
                num_in !== 0 ||
                cp !== 0) &&
                (parseInt(num_ext) < 1 || 
                parseInt(num_in) < 1 ||
                parseInt(cp) < 1 ||
                !this.isInt(num_ext) || 
                !this.isInt(num_in) ||
                !this.isInt(cp))
        )
            this.setState({
                invalidData: true
            })
        else if((nombres !== '' ||
                apellidos !== '' ||
                telefono !== '' ||
                correo !== '' ||
                contrasena !== '' ||
                calle !== '' ||
                num_ext !== '' ||
                colonia !== '' ||
                municipio !== '' ||
                cp !== '' ||
                ciudad !== '' ||
                estado !== '')
                && !hasErrors
                && !invalidData
        ) {
            api.registerUser(this.state.user)
                .then(data => {
                    if(data.altaUsuarioResponse.return.content === -1)
                        this.setState({
                            emailExists: true
                        })
                    else
                        this.setState({
                            registered: true
                        })
                })
        }
    }

    render() {
        if(!this.state.hasErrors && this.state.registered) {
            return <Redirect to="/userLogin"/> 
        }
        return(
            <RegisterView 
                hasErrors={this.state.hasErrors} 
                apiRegister={e => this.apiRegister(e)} 
                emailExists={this.state.emailExists} 
                invalidData={this.state.invalidData} 
                handleInputChange={(e, val) => {this.handleInputChange(e, val)}}/>
        );
    }
}

export default RegisterContainer; 