import React, { Component } from 'react';
import PaymentView from './Payment-view';
import { Redirect } from "react-router-dom";
import update from 'immutability-helper';
import api from '../../utils/api/api';

const pRetry = require('p-retry');

class PaymentContainer extends Component {
    _isMounted = false;
    state = {
        pagado: false,
        user: {
            nombres: '',
            apellidos: '',
            telefono: '',
            correo: '',
            contrasena: '',
            calle: '',
            num_ext: 0,
            num_in: '',
            colonia: '',
            municipio: '',
            cp: 0,
            ciudad: '',
            estado: ''
        },
        registered: false,
        hasErrors: false,
        invalidData: false,
        emailExists: false,
        paymentError: false,
        pago: {
            id_usuario: 0,
            tarjeta: '',
            cvv: 0,
            ano: 0,
            mes: 0,
            costo_total: 0,
            cantidad: 0,
            fecha_entrega: ''
        },
        pedidos: []
    }

    componentDidMount() {
        this._isMounted = true;
        const auxPago = { ...this.state.pago };
        const user = { ...this.props.user }
        const precioTotal = this.getPrecioTotal(this.props);        
        auxPago.id_usuario = user.id_usuario;
        if(precioTotal !== this.state.pago.costo_total)
            auxPago.costo_total = precioTotal
        this.setState({
            pago: auxPago
        });
            
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleInputChange(e, val, type){
        const userPago = type === 'user' ? { ...this.state.user }: { ...this.state.pago };
        const userPagoKey = type === 'user' ? 'user': 'pago';
        const {
            hasErrors,
            emailExists,
            invalidData
        } = this.state;
        if(hasErrors || emailExists || invalidData) {
            userPago[val] = e;
            this.setState({
                hasErrors: false,
                invalidData: false,
                emailExists: false,
                [userPagoKey]: userPago 
            });
        }
        else if ((!hasErrors && !emailExists && !invalidData) || (!hasErrors && !invalidData && this.props.isLoggedIn)) {
            userPago[val] = e;
            this.setState({
                [userPagoKey]: userPago 
            });
        }
        if(val === 'telefono') {
            this.setState({
                [userPagoKey]: update(userPago, {
                    contrasena: {$set: e},
                    telefono: {$set: e}
                })
            });
        }
            
    }

    getPrecioTotal = (prop) => {
        let precioTotal = 0;

        prop.shoppingCart.items.forEach(elem => precioTotal = elem.precioTotal + precioTotal);

        return precioTotal;
    }

    isInt = (value) => {
        let x;
        if (isNaN(value)) {
            return false;
        }
        x = parseFloat(value);
        return (x | 0) === x;
    }

    addDaysFromToday = days => {
        const today = new Date();
        const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);

        return nextDay.toLocaleString();
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    apiPago = (e) => {
        e.preventDefault();

        const days = this.getRandomInt(2, 10);
        const auxPago = {...this.state.pago};
        auxPago.fecha_entrega = this.addDaysFromToday(days);

        if (!this.props.isLoggedIn) {
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
            const {
                tarjeta,
                cvv,
                ano,
                mes
            } = this.state.pago

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
                estado === '' ||
                tarjeta === '' ||
                cvv === 0 ||
                mes === 0 ||
                ano === 0
            )
                this.setState({
                    hasErrors: true
                })
            else if(num_in !== '' &&
                    (num_ext !== 0 ||
                    cp !== 0) &&
                    (parseInt(num_ext) < 1 || 
                    parseInt(num_in) < 1 ||
                    parseInt(cp) < 1 ||
                    !this.isInt(num_ext) || 
                    !this.isInt(num_in) ||
                    !this.isInt(cp) ||
                    tarjeta.length < 16 ||
                    ano.toString().length < 4 ||
                    cvv.toString().length < 3 ||
                    mes.toString().length < 2)
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
                        else {
                            this.setState({
                                registered: true
                            });
                            return data.altaUsuarioResponse.return.content;
                        }
                    })
                    .then(data => {
                        if(typeof(data) !== undefined && data !== undefined && !!data !== false) {
                            auxPago.id_usuario = data;
                            const pedidos = this.props.shoppingCart.items.map(elem => ({
                                id_producto: elem.id,
                                id_usuario: auxPago.id_usuario,
                                tarjeta: auxPago.tarjeta,
                                costo_total: elem.precioTotal,
                                cantidad: elem.cantidad,
                                precio: elem.precio,
                                fecha_entrega: auxPago.fecha_entrega
                            }));
                            
                            (async () => {
                                for (let index = 0; index < pedidos.length; index++) {
                                    const elem = pedidos[index];
                                    await pRetry(async (currentAttempt) => {
                                        console.log('sending request: ', currentAttempt, ' attempt');
                                        const res = await api.newSale(elem);
                                        if(index === pedidos.length && res.enviarPedidoResponse.return.content);
                                            localStorage.removeItem('shoppingCart');
                                            if(this._isMounted)
                                                this.setState({
                                                    pedidos,
                                                    pagado: true
                                                });
                                        if(index === pedidos.length && res.enviarPedidoResponse.return.content && !res.enviarPedidoResponse.return.content)
                                            if(this._isMounted)        
                                                this.setState({
                                                    pedidos: [],
                                                    paymentError: true
                                                });
                                        
                                    }, {
                                        retries: 5,
                                        factor: 3,
                                        minTimeout: 1 * 100,
                                        maxTimeout: 60 * 100,
                                        randomize: true,
                                    
                                    })
                                }
                            })();
                        }
                    })
            }
        }

        else {
            const { 
                hasErrors,
                invalidData
            } = this.state;
            const {
                tarjeta,
                cvv,
                ano,
                mes
            } = this.state.pago
            
            if(tarjeta === '' || cvv === 0 || mes === 0 || ano === 0) {
                this.setState({
                    hasErrors: true
                })
            }
            else if(tarjeta.length < 16 ||
                    ano.toString().length < 4 ||
                    cvv.toString().length < 3 ||
                    mes.toString().length < 2)
                this.setState({
                    invalidData: true
                })
            else if(!hasErrors && !invalidData) {
                const { id_usuario } = this.props.user;
                const pedidos = this.props.shoppingCart.items.map(elem => ({
                    id_producto: elem.id,
                    id_usuario: id_usuario,
                    tarjeta: auxPago.tarjeta,
                    costo_total: elem.precioTotal,
                    cantidad: elem.cantidad,
                    precio: elem.precio,
                    fecha_entrega: auxPago.fecha_entrega
                }));

                (async () => {
                    for (let index = 0; index < pedidos.length; index++) {
                        const elem = pedidos[index];
                        await pRetry(async (currentAttempt) => {
                            console.log('sending request: ', currentAttempt, ' attempt');
                            const res = await api.newSale(elem);
                            if(index === pedidos.length && res.enviarPedidoResponse.return.content);
                                localStorage.removeItem('shoppingCart');
                                if(this._isMounted)
                                    this.setState({
                                        pedidos,
                                        pagado: true
                                    });
                            if(index === pedidos.length && res.enviarPedidoResponse.return.content && !res.enviarPedidoResponse.return.content)
                                if(this._isMounted)        
                                    this.setState({
                                        pedidos: [],
                                        paymentError: true
                                    });
                            
                        }, {
                            retries: 5,
                            factor: 3,
                            minTimeout: 1 * 100,
                            maxTimeout: 60 * 100,
                            randomize: true,
                        
                        })
                    }
                })();
                
            }
        }

    }

    render() {
        if(this.state.pagado)
            return <Redirect to="/payed"/>
        return(
            <PaymentView 
                loggedIn={ this.props.isLoggedIn } 
                hasErrors={ this.state.hasErrors } 
                emailExists={ this.state.emailExists } 
                paymentError={ this.state.paymentError }
                invalidData={ this.state.invalidData }
                precioTotal={ this.state.pago.costo_total } 
                pagar={(e) => this.apiPago(e)} 
                shoppingCart={ this.props.shoppingCart } 
                handleInputChange={(e, val, type) => {this.handleInputChange(e, val, type)}}/>
        );
    }
}

export default PaymentContainer; 