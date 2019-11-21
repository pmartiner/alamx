import React from 'react';
import styles from './Cart-style.module.css'; 
import { Link } from "react-router-dom";
import ProductView from './Product/Product-view';


const cartView = props => {
    let precioTotal = 0;
    let hide = "hide";

    const products = props.shoppingCart.map((elem, i) => {
          precioTotal = precioTotal + elem.precioTotal;
          if(precioTotal > 0)
            hide = "input-field col s12 center";
          return <ProductView 
                    key={elem.nombre + "_" + Math.floor(Math.random()*100)}
                    nombre = { elem.nombre }
                    foto = { elem.foto }
                    cantidad = { elem.cantidad } 
                    precio = { elem.precio } 
                    precioTotal = { elem.precioTotal }
                    detalles = { elem.detalles }
                    historia = { elem.historia }                    
                    addToCart={ props.addToCart }
                    removeFromCart={ props.removeFromCart }                      
                /> 
        });

    return(
        
       <main>
            <section className={`tea-rose ${styles["cart-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center rifle-green-text ${styles["cart-subtext"]}`}>Bolsa</h1>
                            <div className="center row-separator dingy-dungeon"/>
                            <div className="row">
                                { products }
                            </div>
                            <div className="row">
                                <div className="col s6 m4 l4 offset-s3 offset-m4 offset-l4 center">
                                    <h4 className="rifle-green-text flow-text">Total: <span className="bold dingy-dungeon-text">MXN ${precioTotal}</span></h4> 
                                </div>
                                <div className={hide}>
                                    <Link className="waves-effect waves-light btn-large rifle-green" to={{ pathname: '/payment', state: { precioTotal: precioTotal } }}>Proceder al pago</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
}

export default cartView;