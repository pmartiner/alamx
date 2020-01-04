import React from 'react';
import styles from './Landing-style.module.css'; 
import FitText from '@kennethormandy/react-fittext';
import { Link } from "react-router-dom";

const landingView = props => {
    return(
       <main>
           <section>
                <div className={`container row ${styles["land-container"]}`}>
                    <div className="col s12 m12 l12">
                    <FitText compressor={0.5}>
                        <React.Fragment>
                            <h1 className={`rifle-green-text ele-font ${styles["land-text"]}`}>A la mexicana.</h1>
                            <h1 className={`rifle-green-text ${styles["land-subtext"]}`}>Una experiencia única, con sabor a&nbsp;
                                <span className="bold ele-font">
                                    <span className="green-mex-text">Mé</span>xi<span className="red-mex-text">co.</span>
                                </span>
                            </h1>
                        </React.Fragment>
                    </FitText>
                    </div>
                </div>
            </section>
            <section className={`tumbleweed ${styles["explora-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center rifle-green-text ${styles["land-subtext"]}`}>Explora</h1>
                            <div className="center row-separator white"/>
                            <div className="row valign-wrapper valign-mob">
                                <div className="center col s12 m4 l3">
                                    <Link to="/catalog">
                                        <img src={'/assets/images/cafe.jpg'} alt="" className={`${styles["prod-explora"]} circle responsive-img`}/>
                                    </Link>
                                </div>
                                <div className="justify col s12 m8 l9">
                                    <h4 className="bold ele-font rifle-green-text">Café de olla</h4>
                                    <span className={`${styles.historia} rifle-green-text`}>
                                        Con tan sólo oler nuestro macarrón de café de olla te recordará una de las más viejas tradiciones mexicanas, 
                                        desde el barro rojo hasta el piloncillo; con los mejores granos de Chiapas, cada mordida te calentará el espíritu y el alma.
                                    </span>
                                </div>
                            </div>
                            <div className="row valign-wrapper valign-mob">
                                <div className="center col s12 m4 l3">
                                    <Link to="/catalog">
                                        <img src={'/assets/images/pina_colada.jpg'} alt="" className={`${styles["prod-explora"]} circle responsive-img`}/>
                                    </Link>
                                </div>
                                <div className="justify col s12 m8 l9">
                                    <h4 className="bold ele-font rifle-green-text">Piña colada</h4>
                                    <span className={`${styles.historia} rifle-green-text`}>
                                        Cada bocado de este macarron nos recuerda a lo mejor de las costas mexicana: su frescura y su sabor; 
                                        con los mejores cocos de Colima y las piñas más frescas de Veracruz, el macarrón de piña colada se ha convertido
                                        en uno de los imperdibles de nuestro catálogo.
                                    </span>
                                </div>
                            </div>
                            <div className="row valign-wrapper valign-mob">
                                <div className="center col s12 m4 l3">
                                    <Link to="/catalog">
                                        <img src={'/assets/images/mango.jpg'} alt="" className={`${styles["prod-explora"]} circle responsive-img`}/>
                                    </Link>
                                </div>
                                <div className="justify col s12 m8 l9">
                                    <h4 className="bold ele-font rifle-green-text">Mango con chamoy</h4>
                                    <span className={`${styles.historia} rifle-green-text`}>
                                    Caminando por las bellas calles de la ciudad seguramente has disfrutado de un gigante vaso de mango con chile o una pieza completa 
                                    cortada a manera de flor, cubierta de nuestro tradicional salsa de chamoy, algo muy típico de nuestra cultura gastronómica.
                                    Elegimos los mejores Nayarit para que disfutes este macarrón de mango con chamoy y te teletransporte a las cálidas calles de Tepic.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`tea-rose ${styles["explora-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center dingy-dungeon-text ${styles["land-subtext"]}`}>Sobre nosotras</h1>
                            <div className="center row-separator white"/>
                            <div className="row ">
                                <h4 style={{lineHeight: "1.4em"}} className={"rifle-green-text justify"}>
                                    <span style={{fontSize: "1.3em"}} className="bold ele-font">A la mexicana</span> surge como un proyecto de dos chefs en la búsqueda de que cada mexicane pueda llevarse 
                                    en cada mordida un pedazo del sabor de México.
                                    <br/>
                                    <br/>
                                    A través de la <span className="bold">liofilización</span>, logramos sacar lo mejor de México y su tierra para poder brindarles una experiencia gastronómica nunca antes vista.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
}

export default landingView;