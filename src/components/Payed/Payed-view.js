import React from 'react';
import styles from './Payed-style.module.css';

const payedView = props => {
    return(
        <main>
            <section className={`tea-rose ${styles["register-container"]}`}>
                <div className={`center container row`}>
                    <form className="col s12">
                        <h1 className={`dingy-dungeon-text ${styles["register-head"]}`}>¡Pagado con éxito!</h1>
                        <div className="row"></div>
                        <h3 className="white-text">Tu paquete está en camino</h3>
                        <iframe title="GIF en camino" src="https://giphy.com/embed/3o7btSt2Et1GgIaDAY" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-compliments-3o7btSt2Et1GgIaDAY">via GIPHY</a></p>
                        
                         
                    </form>
                </div>
            </section>
        </main>
    );
}

export default payedView;