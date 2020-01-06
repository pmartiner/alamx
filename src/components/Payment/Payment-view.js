import React from 'react';
import styles from './Payment-style.module.css'; 
import { Redirect } from "react-router-dom";

const paymentView = (props) => {
    if(props.hasErrors)
        alert("Faltan campos por llenar.")
    if(props.invalidData)
        alert("Datos inválidos.")
    if(props.emailExists)
        alert("El correo introducido ya existe.")
    if(props.paymentError) {
        alert("Hubo un error al procesar el pago. Intente nuevamente más tarde. Si creó una cuenta temporal, intente iniciar sesión con ella para agilizar el pago");
        return <Redirect to="/cart"/>
    }

    let content = (
        <React.Fragment>
            <h4 className={`rifle-green-text`}>Sobre ti</h4>            
            <div className="row">
                <div className="input-field col s12 m6 l6">
                    <input required id="first_name" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'nombres', 'user')}}/>
                    <label htmlFor="first_name">Nombre</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input required id="last_name" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'apellidos', 'user')}}/>
                    <label htmlFor="last_name">Apellidos</label>
                </div>
                <div className="input-field col s12">
                    <input required id="tel" type="tel" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'telefono', 'user')}} />
                    <label htmlFor="tel">Teléfono</label>
                </div>
                <div className="input-field col s12">
                    <input required id="email" type="email" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'correo', 'user')}} />
                    <label htmlFor="email">Correo</label>
                </div>
                <div className="input-field col s12">
                    <h6 className={`dingy-dungeon-text bold`}>Nota:&nbsp;
                        <span className={`grey-text lighten-1`} style={{fontWeight: 'normal'}}>
                            Para poder realizar el seguimiento de tu pedido te crearemos una cuenta temporal en la que podrás 
                            iniciar sesión con el correo electrónico que aquí escribas utilizado tu número de teléfono como contraseña.
                        </span>
                    </h6>
                </div>
            </div>
            <h4 className={`rifle-green-text`}>Dirección de entrega</h4>
            <div className="row">
                <div className="input-field col s12 m4 l4">
                    <input required id="street" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'calle', 'user')}} />
                    <label htmlFor="street">Calle</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input required id="num_ext" type="number" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'num_ext', 'user')}} />
                    <label htmlFor="num_ext">Número exterior</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input id="num_int" type="number" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'num_in', 'user')}} />
                    <label htmlFor="num_int">Número interior (opcional)</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input required id="colonia" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'colonia', 'user')}} />
                    <label htmlFor="colonia">Colonia</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input required id="alcaldia" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'municipio', 'user')}} />
                    <label htmlFor="alcaldia">Alcaldía/Municipio</label>
                </div>
                <div className="input-field col s12 m4 l4">
                    <input required id="cp" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'cp', 'user')}} />
                    <label htmlFor="cp">Código Postal</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input required id="ciudad" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'ciudad', 'user')}} />
                    <label htmlFor="ciudad">Ciudad</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input required id="estado" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'estado', 'user')}} />
                    <label htmlFor="estado">Estado</label>
                </div>
            </div>
            <h4 className={`rifle-green-text`}>Datos financieros</h4>
            <div className="row">
                <div className="input-field col s12">
                    <input required id="num_tarjeta" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'tarjeta', 'pago')}}  pattern="[0-9.]+" maxLength="16"/>
                    <label htmlFor="num_tarjeta">Número de tarjeta</label>
                </div>
                <div className="input-field col s4">
                    <input required id="cvv" type="password" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'cvv', 'pago')}} maxLength="3"/>
                    <label htmlFor="cvv">CVV</label>
                </div>
                <div className="input-field col s4">
                    <input required id="mes" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'mes', 'pago')}} maxLength="2"/>
                    <label htmlFor="mes">Mes (MM)</label>
                </div>
                <div className="input-field col s4">
                    <input required id="year" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'ano', 'pago')}} maxLength="4"/>
                    <label htmlFor="year">Año (YYYY)</label>
                </div>
            </div>

        </React.Fragment>
    );

    
    if(props.loggedIn)
        content = (<div className="row">
                    <div className="input-field col s12">
                        <input required id="num_tarjeta" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'tarjeta', 'pago')}}  pattern="[0-9.]+" maxLength="16"/>
                        <label htmlFor="num_tarjeta">Número de tarjeta</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="cvv" type="password" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'cvv', 'pago')}} maxLength="3"/>
                        <label htmlFor="cvv">CVV</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="mes" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'mes', 'pago')}} maxLength="2"/>
                        <label htmlFor="mes">Mes (MM)</label>
                    </div>
                    <div className="input-field col s4">
                        <input required id="year" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'ano', 'pago')}} maxLength="4"/>
                        <label htmlFor="year">Año (YYYY)</label>
                    </div>
                </div>
        );

    return(
        <main>
            <section className={`white ${styles["register-container"]}`}>
                <div className={`container row`}>
                    <form className="col col offset-s1 s10">
                        <h1 className={`rifle-green-text ${styles["register-head"]}`}>Pago</h1>
                        <div className="row"></div>
                        <h4 className={`dingy-dungeon-text`}>Por pagar: MXN ${props.precioTotal}</h4>
                        { content }
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn rifle-green" onClick={ props.pagar }>Pagar</button>
                            </div>
                        </div>   
                    </form>
                </div>
            </section>
        </main>
    );

}

export default paymentView;