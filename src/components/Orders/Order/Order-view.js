import React from 'react';
import './Order-style.css';

const orderItem = props => {
    const {
        cantidad,
        costoTotal,
        fechaEntrega,
        idPedido,
        idProducto: {
            foto,
            nombre,
            precio
        },
        tarjeta,
        idUsuario: {
            calle,
            ciudad,
            colonia,
            cp,
            estado,
            municipio,
            numExt,
            numInt
        }
    } = props.item;

    const isToday = (date) => {
        const inputDate = new Date(date);
        const todaysDate = new Date();
        let isToday = 'Llega hoy';
        if(inputDate.setHours(0,0,0,0) > todaysDate.setHours(0,0,0,0))
            isToday = 'Llegando el ' + inputDate.toLocaleDateString();
        if(inputDate.setHours(0,0,0,0) < todaysDate.setHours(0,0,0,0))
            isToday = 'Llegó el ' + inputDate.toLocaleDateString();
        
        return isToday;
    };

    const tarjetaStr = tarjeta.toString();
      
    return(
        <div className="col s12 rifle-green-text">
            <div className="card horizontal">
                <div className="card-image ">
                    <img src={ foto } alt={"macarrón de " + nombre}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="row marginless-row">
                            <div className="col s12 m9 l8">
                                <span className="titulo-orden">Macarron{ (cantidad > 1 && 'es') } de { nombre }</span>
                            </div>
                            <div className="col s12 m3 l4">
                                <span className="titulo-orden small-on-mob right-on-desk">ID: #{ idPedido }</span>
                            </div>
                        </div>
                        <div className="row marginless-row">
                            <div className="col s12 m6 l6">
                                <h6 className="dingy-dungeon-text bold">{ isToday(fechaEntrega) }</h6>
                            </div>
                            <div className="col s12 m6 l6">
                                <h6 className="bold right-on-desk">Pagado con la tarjeta ****{ tarjetaStr.substring(tarjetaStr.length-4) }</h6>
                            </div>
                            <div className="col s12 ">
                                <h6 className="bold">
                                    Se entregará en 
                                </h6>
                            </div>
                            <div className="col s12 ">
                                <h6>
                                    { calle } { numExt }{ numInt > 0 ? ' int. ' + numInt : '' }, Col. { colonia }, { municipio }, { ciudad }, { estado }, C.P. { cp } 
                                </h6>
                            </div>
                            <div className="col s12">
                                <h6 className="bold">Pediste:</h6>
                            </div>
                            <div className="col s12 m8 l8">
                                <h6>{ cantidad } macarron{ (cantidad > 1 && 'es') } de { nombre.toLowerCase() }</h6>
                            </div>
                            <div className="col s12 m4 l4">
                                <h6 className="right">{ cantidad } x MXN ${ precio }</h6>
                            </div>
                        </div>
                        <div className="row marginless-row">
                            <div className="col s12">
                                <span className="dingy-dungeon-text small-on-mob  bold">Total: <span className="rifle-green-text">MXN ${ costoTotal }</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
    );
}

export default orderItem;