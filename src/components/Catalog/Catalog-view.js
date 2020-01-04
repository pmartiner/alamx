import React from 'react';
import styles from './Catalog-style.module.css'; 
import CatalogItem from './Catalog-item-view';

const catalogView = props => {
    const catalog = props.catalog.map((elem, index) => {
        let catalogContent = <CatalogItem item={elem} key={index} addToCart={props.addToCart}/>;

        return (
            <div key={ index + 1 }>
                { catalogContent }
            </div>
        );
    });

    return(
       <main>
            <section className={`tumbleweed ${styles["catalogo-container"]}`}>
                <div className={`container row`}>
                    <div className="col s12 m12 l12">
                        <div className={styles["flex-child"]}>
                            <h1 className={`center rifle-green-text ${styles["catalogo-subtext"]}`}>Catálogo</h1>
                            <div className="center row-separator white"/>
                            <div className="row">
                                { catalog }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
}

export default catalogView;