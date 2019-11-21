import React from 'react';
import styles from './Product-style.module.css'; 
import M from 'materialize-css';


const productView = props => {
    return(
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={ props.foto } style={{ cursor: "pointer" }} className="activator" alt={"macarrón de " + props.nombre}/>
                    <span style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", width: "100%" }} className="card-title">{props.nombre}</span>
                    <button 
                        className="btn-floating halfway-fab waves-effect waves-light dingy-dungeon" 
                        onClick={ () => {
                            M.toast({html: 'Agregado a la bolsa', displayLength: 700, classes: 'rifle-green'});
                            props.addToCart({
                                nombre: props.nombre,
                                foto: props.foto,
                                cantidad: props.cantidad, 
                                precio: props.precio, 
                                precioTotal: props.precioTotal,
                                detalles: props.detalles,
                                historia: props.historia
                            })
                        } }>
                            <i className="material-icons">add</i>
                    </button>
                    <button 
                        className={`btn-floating ${styles["fab-halfway"]} waves-effect waves-light dingy-dungeon`}
                        onClick={ () => {
                            M.toast({html: 'Eliminado de la bolsa', displayLength: 700, classes: 'rifle-green'});
                            props.removeFromCart({
                                nombre: props.nombre,
                                foto: props.foto,
                                cantidad: props.cantidad, 
                                precio: props.precio, 
                                precioTotal: props.precioTotal,
                                detalles: props.detalles,
                                historia: props.historia
                            })
                        } }>
                            <i className="material-icons">remove</i>
                    </button>
                </div>
                <div className="card-content">
                    <p>Cantidad: {props.cantidad}</p>
                    <h5>MXN ${props.precioTotal}</h5>
                    <a className="activator dingy-dungeon-text" href="#!">Detalles</a>
                </div>
                <div className="card-reveal rifle-green-text">
                    <span className="card-title grey-text text-darken-4">Detalles<i className="material-icons right">close</i></span>
                    <p>{props.detalles}</p>
                    <h5>Historia</h5>
                    <p>{props.historia}</p>
                </div>
            </div>
        </div>
    );
}

export default productView;