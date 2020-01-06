import React from 'react';
import styles from './Orders-style.module.css'; 
import OrderItem from './Order/Order-view';

const ordersView = props => {
    const orders = props.orders.map((elem, index) => {
        let ordersContent = <OrderItem item={elem} key={index}/>;

        return (
            <div key={ index + 1 }>
                { ordersContent }
            </div>
        );
    });

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