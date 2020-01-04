import React from 'react';
import styles from './Login-style.module.css'; 


const loginView = props => {
    if(props.isEmpty)
        alert("Faltan campos por llenar")
    if(props.hasErrors)
        alert("Datos inválidos")
    return(
       <main>
           <section className={`tea-rose ${styles["login-container"]}`}>
                <div className={`container row`}>
                    <form className="col s12 m8 l6 offset-m2 offset-l3">
                        <div className="card-panel white">
                            <h1 className={`center rifle-green-text ${styles["login-head"]}`}>Inicia sesión</h1>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input required id="email" type="email" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'correo')}}/>
                                    <label htmlFor="email">Correo</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input required id="password" type="password" className="validate" onChange={(e) => {props.handleInputChange(e.target.value, 'contrasena')}}/>
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                            </div>
                            <div className="row">
                                <p className="col s12">
                                    <label>
                                        <input className="check filled-in" type="checkbox" onChange={(e) => {props.handleInputChange(e)}}/>
                                        <span>Recuérdame</span>
                                    </label>
                                </p>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <button className="waves-effect waves-light btn rifle-green" onClick={(e) => props.apiLogin(e)}>Iniciar sesión</button>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </section>
       </main>
    );
}

export default loginView;