import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import styles from './Header-style.module.css'; 
import logo from '../../assets/images/a.png';
import { Link } from "react-router-dom";


const headerView = props => {
    let content = null;
    console.log(props.shoppingCart)
        
    if(typeof(props.user) === "object")
        content = [
                <Link key="1_perf" className="bold rifle-green-text" to="/payed">
                    Envíos
                </Link>,
                <Link key="2_cat" to="/catalog" className="bold rifle-green-text">Catálogo</Link>,
                <Link key="3_cart" to="/cart" className="rifle-green-text valign-wrapper">
                    <Icon className="fullHeight inlineBlock">shopping_basket</Icon><span data-badge-caption="" className={`new badge tea-rose rifle-green-text ${styles["cart-cant"]}`}>{ props.shoppingCart.cantidadItems }</span>
                </Link>,
                <a key="4_cer" className="bold rifle-green-text" href="#!" onClick={props.logout}>
                    Cerrar sesión
                </a>
            ];
    else if(typeof(props.user) === "undefined")
        content = [
                <Link key="1_cat_guest" to="/catalog" className="bold rifle-green-text">Catálogo</Link>,
                <Link key="2_cart_guest" to="/cart" className="rifle-green-text valign-wrapper">
                    <Icon className="fullHeight inlineBlock">shopping_basket</Icon><span data-badge-caption="" className={`new badge tea-rose rifle-green-text ${styles["cart-cant"]}`}>{ props.shoppingCart.cantidadItems }</span>
                </Link>,
                <Link key="3_inicio_ses" to="/userLogin" className="bold rifle-green-text">Iniciar sesión</Link>,
                <Link key="4_regi" to="/register" className="bold rifle-green-text">Registrarse</Link>
            ];

    return(
        <header>
            <Navbar 
                className={ `${styles["alamx-nav"]}` } 
                brand={ 
                    <Link style={{height: "100%", display: "inline-block"}} to="/">
                        <img className={ styles.logo } src={ logo } alt="Logo A la mexicana"/>
                    </Link> 
                } 
                alignLinks="right"
                menuIcon={ <Icon className="rifle-green-text">menu</Icon> }
                fixed
            >
                { content }
            </Navbar>
        </header>
    )
}

export default headerView;