import React from 'react';
import styles from './Payed-style.module.css';
import { Link } from "react-router-dom";

const payedView = props => {
    return(
        <main>
            <section className={`tea-rose ${styles["register-container"]}`}>
                <div className={`center container row`}>
                    <form className="col s12">
                        <h1 className={`dingy-dungeon-text ${styles["register-head"]}`}>¡Pagado con éxito!</h1>
                        <div className="row"></div>
                        <h3 className="white-text">Tu paquete está en camino</h3>
                        <img src="https://media.giphy.com/media/3o7btSt2Et1GgIaDAY/source.gif" alt="GIF pedido en camino" className="responsive-img"/>
                        <div className="row"></div>
                        <div>
                            <Link className="waves-effect waves-light btn-large rifle-green" to={{ pathname: '/orders'}}>Ver mis pedidos</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default payedView;