import React, { Component } from 'react';
import styles from './Payment-style.module.css'; 


class paymentView extends Component {
    render() {
        let content = (
            <React.Fragment>
                <h4 className={`rifle-green-text`}>Sobre ti</h4>
                <div className="row">
                    <div className="input-field col s12 m6 l6">
                        <input required id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">Nombre</label>
                    </div>
                    <div className="input-field col s12 m6 l6">
                        <input required id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Apellidos</label>
                    </div>
                    <div className="input-field col s12">
                        <input required id="tel" type="tel" className="validate" />
                        <label htmlFor="tel">Teléfono</label>
                    </div>
                    <div className="input-field col s12">
                        <input required id="email" type="email" className="validate" />
                        <label htmlFor="email">Correo</label>
                    </div>
                    <div className="input-field col s12">
                        <input required id="password" type="password" className="validate" />
                        <label htmlFor="password">Contraseña</label>
                    </div>
                </div>
                <h4 className={`rifle-green-text`}>Dirección de entrega</h4>
                <div className="row">
                    <div className="input-field col s12 m4 l4">
                        <input required id="street" type="text" className="validate" />
                        <label htmlFor="street">Calle</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input required id="num_ext" type="number" className="validate" />
                        <label htmlFor="num_ext">Número exterior</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input id="num_int" type="number" className="validate" />
                        <label htmlFor="num_int">Número interior</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input required id="colonia" type="text" className="validate" />
                        <label htmlFor="colonia">Colonia</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input required id="alcaldia" type="text" className="validate" />
                        <label htmlFor="alcaldia">Municipio</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input required id="cp" type="number" className="validate" />
                        <label htmlFor="cp">Código Postal</label>
                    </div>
                    <div className="input-field col s12 m6 l6">
                        <input required id="ciudad" type="text" className="validate" />
                        <label htmlFor="ciudad">Ciudad</label>
                    </div>
                    <div className="input-field col s12 m6 l6">
                        <input required id="estado" type="text" className="validate" />
                        <label htmlFor="estado">Estado</label>
                    </div>
                </div>
                <h4 className={`rifle-green-text`}>Datos financieros</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input required id="num_tarjeta" type="text" className="validate"  pattern="[0-9.]+" maxLength="16"/>
                        <label htmlFor="num_tarjeta">Número de tarjeta</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="last_name" type="password" className="validate" maxLength="4"/>
                        <label htmlFor="last_name">CVV</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="mes" type="text" className="validate" maxLength="2"/>
                        <label htmlFor="mes">Mes</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="year" type="text" className="validate" maxLength="4"/>
                        <label htmlFor="year">Año</label>
                    </div>
                </div>

            </React.Fragment>
        );
        
        let precioTotal = 0;

        this.props.shoppingCart.forEach(elem => precioTotal = elem.precioTotal + precioTotal);
        console.log(precioTotal)

        if(this.props.hasErrors)
            alert("Faltan campos por llenar")
        if(this.props.loggedIn)
            content = (<div className="row">
                        <div className="input-field col s12">
                            <input required id="num_tarjeta" type="text" className="validate"  pattern="[0-9.]+" maxLength="16"/>
                            <label htmlFor="num_tarjeta">Número de tarjeta</label>
                        </div>
                        <div className="input-field col s4">
                            <input required id="last_name" type="password" className="validate" maxLength="4"/>
                            <label htmlFor="last_name">CVV</label>
                        </div>
                        <div className="input-field col s4">
                            <input required id="mes" type="text" className="validate" maxLength="2"/>
                            <label htmlFor="mes">Mes</label>
                        </div>
                        <div className="input-field col s4">
                            <input required id="year" type="text" className="validate" maxLength="4"/>
                            <label htmlFor="year">Año</label>
                        </div>
                    </div>);
        return(
            <main>
                <section className={`white ${styles["register-container"]}`}>
                    <div className={`container row`}>
                        <form className="col col offset-s3 s6">
                            <h1 className={`rifle-green-text ${styles["register-head"]}`}>Pago</h1>
                            <div className="row"></div>
                            <h4 className={`dingy-dungeon-text`}>Por pagar: MXN ${precioTotal}</h4>
                            { content }
                            
                            <div className="row">
                                <div className="input-field col s12">
                                    <button className="waves-effect waves-light btn rifle-green" onClick={ this.props.pagar }>Pagar</button>
                                </div>
                            </div>   
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default paymentView;