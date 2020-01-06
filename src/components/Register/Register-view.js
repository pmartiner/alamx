import React from 'react';
import styles from './Register-style.module.css'; 


const registerView = props => {
    if(props.hasErrors)
        alert("Faltan campos por llenar.")
    if(props.invalidData)
        alert("Datos inválidos.")
    if(props.emailExists)
        alert("El correo introducido ya existe.")
    return(
       <main>
           <section className={`white ${styles["register-container"]}`}>
                <div className={`container row`}>
                    <form className="col s12">
                        <h1 className={`rifle-green-text ${styles["register-head"]}`}>Registrarse</h1>
                        <div className="row"></div>
                        <h2 className={`rifle-green-text ${styles["register-subhead"]}`}>Sobre ti</h2>
                        <div className="row">
                            <div className="input-field col s12 m6 l6">
                                <input required id="first_name" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'nombres')}}/>
                                <label htmlFor="first_name">Nombre</label>
                            </div>
                            <div className="input-field col s12 m6 l6">
                                <input required id="last_name" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'apellidos')}}/>
                                <label htmlFor="last_name">Apellidos</label>
                            </div>
                            <div className="input-field col s12">
                                <input required id="tel" type="tel" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'telefono')}}/>
                                <label htmlFor="tel">Teléfono</label>
                            </div>
                            <div className="input-field col s12">
                                <input required id="email" type="email" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'correo')}}/>
                                <label htmlFor="email">Correo</label>
                            </div>
                            <div className="input-field col s12">
                                <input required id="password" type="password" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'contrasena')}}/>
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>
                        <h2 className={`rifle-green-text ${styles["register-subhead"]}`}>Dirección de entrega</h2>
                        <div className="row">
                            <div className="input-field col s12 m4 l4">
                                <input required id="street" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'calle')}}/>
                                <label htmlFor="street">Calle</label>
                            </div>
                            <div className="input-field col s12 m4 l4">
                                <input required id="num_ext" type="number" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'num_ext')}}/>
                                <label htmlFor="num_ext">Número exterior</label>
                            </div>
                            <div className="input-field col s12 m4 l4">
                                <input id="num_int" type="number" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'num_in')}}/>
                                <label htmlFor="num_int">Número interior (Opcional)</label>
                            </div>
                            <div className="input-field col s12 m4 l4">
                                <input required id="colonia" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'colonia')}}/>
                                <label htmlFor="colonia">Colonia</label>
                            </div>
                            <div className="input-field col s12 m4 l4">
                                <input required id="alcaldia" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'municipio')}}/>
                                <label htmlFor="alcaldia">Alcaldía/Municipio</label>
                            </div>
                            <div className="input-field col s12 m4 l4">
                                <input required id="cp" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'cp')}}/>
                                <label htmlFor="cp">Código Postal</label>
                            </div>
                            <div className="input-field col s12 m6 l6">
                                <input required id="ciudad" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'ciudad')}}/>
                                <label htmlFor="ciudad">Ciudad</label>
                            </div>
                            <div className="input-field col s12 m6 l6">
                                <input required id="estado" type="text" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'estado')}}/>
                                <label htmlFor="estado">Estado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn rifle-green" onClick={(e) => {props.apiRegister(e)} }>Registrarse</button>
                            </div>
                        </div>   
                    </form>
                </div>
            </section>
       </main>
    );
}

export default registerView;