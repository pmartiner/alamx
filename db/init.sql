CREATE TABLE usuario(
    id_usuario      INT NOT NULL PRIMARY KEY,
    nombres         VARCHAR(255) NOT NULL,
    apellidos       VARCHAR(255) NOT NULL,
    telefono        VARCHAR(20) NOT NULL,
    correo          VARCHAR(255) NOT NULL,
    contrasena      VARCHAR(500),
    calle           VARCHAR(255) NOT NULL,
    num_ext         INTEGER NOT NULL,
    num_int         INTEGER,
    colonia         VARCHAR(255) NOT NULL,
    municipio       VARCHAR(255) NOT NULL,
    cp              VARCHAR(5) NOT NULL,
    ciudad          VARCHAR(255) NOT NULL,
    estado          VARCHAR(255) NOT NULL
);
CREATE UNIQUE INDEX correo ON usuario(correo);


CREATE TABLE producto(
    id_producto     INT NOT NULL PRIMARY KEY,
    nombre          VARCHAR(100) NOT NULL,
    foto            VARCHAR(2000) NOT NULL,
    precio          DOUBLE NOT NULL,
    detalles        VARCHAR(2000) NOT NULL,
    historia        VARCHAR(3000) NOT NULL
);

CREATE TABLE pedido(
    id_pedido       INT NOT NULL PRIMARY KEY,
    id_producto     INT NOT NULL,
    id_usuario      INT NOT NULL,
    fecha_entrega   DATE,
    tarjeta         VARCHAR(16) NOT NULL,
    cantidad        INT NOT NULL,
    costo_total     DOUBLE NOT NULL,

    CONSTRAINT id_producto FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
    CONSTRAINT fk_pedido_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

INSERT INTO producto(id_producto, nombre, foto, precio, detalles, historia) VALUES
(1, 'Piña colada', '../../assets/images/pina_colada.jpg', 30, 'Hecho a base de liofilización de cocos de Colima y piñas de Veracruz, comprados bajo comercio justo.', 'Cada bocado de este macarron nos recuerda a lo mejor de las costas mexicana: su frescura y su sabor; con los mejores cocos de Colima y las piñas más frescas de Veracruz, el macarrón de piña colada se ha convertido en uno de los imperdibles de nuestro catálogo.'),
(2, 'Café de olla', '../../assets/images/cafe.jpg', 30, 'Hecho a base de liofilización de granos de café de Chiapas, comprados bajo comercio justo.', 'Con tan sólo oler nuestro macarrón de café de olla te recordará una de las más viejas tradiciones mexicanas, desde el barro rojo hasta el piloncillo; con los mejores granos de Chiapas, cada mordida te calentará el espíritu y el alma.'),
(3, 'Mango con chamoy', '../../assets/images/mango.jpg', 30, 'Hecho a base de liofilización de granos de café de Chiapas, comprados bajo comercio justo.', 'Caminando por las bellas calles de la ciudad seguramente has disfrutado de un gigante vaso de mango con chile o una pieza completa cortada a manera de flor, cubierta de nuestro tradicional salsa de chamoy, algo muy típico de nuestra cultura gastronómica. Elegimos los mejores Nayarit para que disfutes este macarrón de mango con chamoy y te teletransporte a las cálidas calles de Tepic.');
