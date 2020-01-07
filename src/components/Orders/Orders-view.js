import React from 'react';
import styles from './Orders-style.module.css'; 
import OrderItem from './Order/Order-view';
import { Link } from "react-router-dom";

const ordersView = props => {
    let orders = [];
    
    if(props.orders.length === 0) {
        orders = (
                <div className="center col s12">
                    <h2 className={`rifle-green-text`}>Por el momento, no tienes órdenes :(</h2>
                    <div className="row"></div>
                    <div>
                        <Link className="waves-effect waves-light btn-large rifle-green" to={{ pathname: '/catalog'}}>Ir al catálogo</Link>
                    </div>
                </div>
        );
    }
    else if(Array.isArray(props.orders))
        orders = props.orders.map((elem, index) => {
            let ordersContent = <OrderItem item={elem} key={index}/>;

            return (
                <div key={ index + 1 }>
                    { ordersContent }
                </div>
            );
        });
    else if(!Array.isArray(props.orders))
        orders = (
            <div>
                <OrderItem item={props.orders}/>;
            </div>
        );

    return(
       <main>
            <section className={`tumbleweed ${styles["pedidos-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center rifle-green-text ${styles["pedidos-subtext"]}`}>Tus pedidos</h1>
                            <div className="center row-separator white"/>
                            <div className="row">
                                { orders }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
}

export default ordersView;