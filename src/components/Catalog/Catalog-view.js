import React from 'react';
import styles from './Catalog-style.module.css'; 
import M from 'materialize-css';

import pina_colada from '../../assets/images/pina_colada.jpg';
import mango from '../../assets/images/mango.jpg';
import cafe from '../../assets/images/cafe.jpg';


const catalogView = props => {
    return(
       <main>
            <section className={`tumbleweed ${styles["catalogo-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center rifle-green-text ${styles["catalogo-subtext"]}`}>Catálogo</h1>
                            <div className="center row-separator white"/>
                            <div className="row">
                                <div className="col s12 m4 l4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ pina_colada } style={{ cursor: "pointer" }} className="activator" alt="macarrón de piña colada"/>
                                            <span style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", width: "100%" }} className="card-title">Piña colada</span>
                                            <button 
                                                className="btn-floating halfway-fab waves-effect waves-light rifle-green" 
                                                onClick={ () => {
                                                                M.toast({html: 'Agregado a la bolsa', displayLength: 700, classes: 'rifle-green'});
                                                                props.addToCart({
                                                                    nombre: "Piña colada",
                                                                    foto: pina_colada,
                                                                    cantidad: 1, 
                                                                    precio: 30, 
                                                                    precioTotal: 30,
                                                                    detalles: "Hecho a base de liofilización de cocos de Colima y piñas de Veracruz, comprados bajo comercio justo.",
                                                                    historia: "Cada bocado de este macarron nos recuerda a lo mejor de las costas mexicana: su frescura y su sabor; con los mejores cocos de Colima y las piñas más frescas de Veracruz, el macarrón de piña colada se ha convertido en uno de los imperdibles de nuestro catálogo."
                                                                })
                                                            } 
                                                        }
                                            >
                                                    <i className="material-icons">post_add</i>
                                            </button>
                                        </div>
                                        <div className="card-content">
                                            <p>Precio por pieza</p>
                                            <h5>MXN $30</h5>
                                            <a className="activator dingy-dungeon-text" href="#!">Detalles</a>
                                        </div>
                                        <div className="card-reveal rifle-green-text">
                                            <span className="card-title grey-text text-darken-4">Detalles<i className="material-icons right">close</i></span>
                                            <p>Hecho a base de liofilización de cocos de Colima y piñas de Veracruz, comprados bajo comercio justo.</p>
                                            <h5>Historia</h5>
                                            <p>Cada bocado de este macarron nos recuerda a lo mejor de las costas mexicana: su frescura y su sabor; 
                                            con los mejores cocos de Colima y las piñas más frescas de Veracruz, el macarrón de piña colada se ha convertido
                                            en uno de los imperdibles de nuestro catálogo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4 l4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ cafe } style={{ cursor: "pointer" }} className="activator" alt="macarrón de café de olla"/>
                                            <span style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", width: "100%" }} className="card-title">Café de olla</span>
                                            <button 
                                                className="btn-floating halfway-fab waves-effect waves-light rifle-green" 
                                                onClick={ () => {
                                                                M.toast({html: 'Agregado a la bolsa', displayLength: 700, classes: 'rifle-green'});
                                                                props.addToCart({
                                                                    nombre: "Café de olla",
                                                                    foto: cafe,
                                                                    cantidad: 1, 
                                                                    precio: 30, 
                                                                    precioTotal: 30,
                                                                    detalles: "Hecho a base de liofilización de granos de café de Chiapas, comprados bajo comercio justo.",
                                                                    historia: "Con tan sólo oler nuestro macarrón de café de olla te recordará una de las más viejas tradiciones mexicanas, desde el barro rojo hasta el piloncillo; con los mejores granos de Chiapas, cada mordida te calentará el espíritu y el alma."
                                                                })
                                                            } 
                                                        }
                                            >
                                                    <i className="material-icons">post_add</i>
                                            </button>
                                        </div>
                                        <div className="card-content">
                                            <p>Precio por pieza</p>
                                            <h5>MXN $30</h5>
                                            <a className="activator dingy-dungeon-text" href="#!">Detalles</a>
                                        </div>
                                        <div className="card-reveal rifle-green-text">
                                            <span className="card-title grey-text text-darken-4">Detalles<i className="material-icons right">close</i></span>
                                            <p>Hecho a base de liofilización de granos de café de Chiapas, comprados bajo comercio justo.</p>
                                            <h5>Historia</h5>
                                            <p>Con tan sólo oler nuestro macarrón de café de olla te recordará una de las más viejas tradiciones mexicanas, 
                                            desde el barro rojo hasta el piloncillo; con los mejores granos de Chiapas, cada mordida te calentará el espíritu y el alma.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4 l4">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={ mango } style={{ cursor: "pointer" }} className="activator" alt="macarrón de mango con chamoy"/>
                                            <span style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", width: "100%" }} className="card-title">Mango con chamoy</span>
                                            <button 
                                                className="btn-floating halfway-fab waves-effect waves-light rifle-green" 
                                                onClick={ () => {
                                                                M.toast({html: 'Agregado a la bolsa', displayLength: 700, classes: 'rifle-green'});
                                                                props.addToCart({
                                                                    nombre: "Mango con chamoy",
                                                                    foto: mango,
                                                                    cantidad: 1, 
                                                                    precio: 30, 
                                                                    precioTotal: 30,
                                                                    detalles: "Hecho a base de liofilización de granos de café de Chiapas, comprados bajo comercio justo.",
                                                                    historia: "Caminando por las bellas calles de la ciudad seguramente has disfrutado de un gigante vaso de mango con chile o una pieza completa cortada a manera de flor, cubierta de nuestro tradicional salsa de chamoy, algo muy típico de nuestra cultura gastronómica. Elegimos los mejores Nayarit para que disfutes este macarrón de mango con chamoy y te teletransporte a las cálidas calles de Tepic."
                                                                })
                                                            } 
                                                        }
                                            >
                                                    <i className="material-icons">post_add</i>
                                            </button>
                                        </div>
                                        <div className="card-content">
                                            <p>Precio por pieza</p>
                                            <h5>MXN $30</h5>
                                            <a className="activator dingy-dungeon-text" href="#!">Detalles</a>
                                        </div>
                                        <div className="card-reveal rifle-green-text">
                                            <span className="card-title grey-text text-darken-4">Detalles<i className="material-icons right">close</i></span>
                                            <p>Hecho a base de liofilización de mangos de Nayarit con un toque de chamoy, comprados bajo comercio justo.</p>
                                            <h5>Historia</h5>
                                            <p>Caminando por las bellas calles de la ciudad seguramente has disfrutado de un gigante vaso de mango con chile o una pieza completa 
                                            cortada a manera de flor, cubierta de nuestro tradicional salsa de chamoy, algo muy típico de nuestra cultura gastronómica.
                                            Elegimos los mejores Nayarit para que disfutes este macarrón de mango con chamoy y te teletransporte a las cálidas calles de Tepic.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
}

export default catalogView;