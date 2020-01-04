import React from 'react';
import M from 'materialize-css';

const catalogItem = props => {
    return(
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={ props.item.foto } style={{ cursor: "pointer" }} className="activator" alt={`macarrón de ${props.item.nombre}`} />
                    <span style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", width: "100%" }} className="card-title">{ props.item.nombre }</span>
                    <button 
                        className="btn-floating halfway-fab waves-effect waves-light rifle-green" 
                        onClick={ () => {
                                        M.toast({html: 'Agregado a la bolsa', displayLength: 700, classes: 'rifle-green'});
                                        props.addToCart({
                                            nombre: props.item.nombre,
                                            foto: props.item.foto,
                                            cantidad: 1, 
                                            precio: props.item.precio, 
                                            precioTotal: props.item.precio,
                                            detalles: props.item.detalles,
                                            historia: props.item.historia,
                                            id: props.item.idProducto
                                        })
                                    } 
                                }
                    >
                            <i className="material-icons">post_add</i>
                    </button>
                </div>
                <div className="card-content">
                    <p>Precio por pieza</p>
                    <h5>MXN ${ props.item.precio }</h5>
                    <a className="activator dingy-dungeon-text" href="#!">Detalles</a>
                </div>
                <div className="card-reveal rifle-green-text">
                    <span className="card-title grey-text text-darken-4">Detalles<i className="material-icons right">close</i></span>
                    <p>{ props.item.detalles} </p>
                    <h5>Historia</h5>
                    <p>{ props.item.historia }</p>
                </div>
            </div>
        </div>
    );
}

export default catalogItem;