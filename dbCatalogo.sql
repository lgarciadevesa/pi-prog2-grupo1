drop schema if exists dbCatalogo;
create schema dbCatalogo; 
use dbCatalogo;

CREATE TABLE usuarios (
	id INT unsigned PRIMARY KEY auto_increment,
    usuario VARCHAR(1000) NOT NULL,
	email VARCHAR(1000) NOT NULL,
    contrasenna VARCHAR(1000) NOT NULL,
    fotoPerfil VARCHAR(1000),
    createdAt timestamp DEFAULT current_timestamp,
    updatedAt timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
    deletedAt timestamp NULL ON UPDATE current_timestamp
);

CREATE TABLE products (
	id INT unsigned PRIMARY KEY auto_increment,
    imagenProducto VARCHAR(1000),
	nombreProducto VARCHAR(1000) NOT NULL,
	descripcionProducto TEXT NOT NULL,
    marcaProducto VARCHAR(1000) NOT NULL,
    createdAt timestamp DEFAULT current_timestamp,
    updatedAt timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
    deletedAt timestamp NULL ON UPDATE current_timestamp,
    idUsuario INT unsigned NOT NULL,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);


CREATE TABLE detalle_compra (
	id INT unsigned PRIMARY KEY auto_increment,
    idUsuario INT unsigned NOT NULL,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
	idProducto INT unsigned NOT NULL,
FOREIGN KEY (idProducto) REFERENCES products(id)
);

CREATE TABLE comentarios (
  id INT unsigned PRIMARY KEY auto_increment,
  idProducto INT unsigned NOT NULL,
  idUsuario INT unsigned NOT NULL,
  texto TEXT NOT NULL,
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
  deletedAt timestamp DEFAULT  NULL ON UPDATE current_timestamp,
  FOREIGN KEY (idProducto) REFERENCES products(id),
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

/* INSERT USUARIO */

INSERT INTO usuarios (id, usuario, email, contrasenna, fotoPerfil)
VALUES
(default, 'Miguel', 'usuario1@gmail.com', '12345678', 'profile-default.png'),
(default, 'maria_gamer', 'maria_gamer@gmail.com', '12345678', 'profile-default.png'),
(default, 'pepe_tech', 'pepe_tech@gmail.com', '12345678', 'profile-default.png'),
(default, 'luli.dev', 'luli.dev@gmail.com', '12345678', 'profile-default.png'),
(default, 'rodrigo_foto', 'rodrigo_foto@gmail.com', '12345678', 'profile-default.png');

/* INSERT PRODUCTOS */
INSERT INTO products (id, imagenProducto, nombreProducto, marcaProducto, descripcionProducto, idUsuario) VALUES
(DEFAULT, 'descarga (1).jpeg', 'Auriculares Bluetooth Sony WH-1000XM5', 'Sony', 'Auriculares inalámbricos premium con cancelación de ruido líder en la industria, hasta 30 horas de batería y conectividad multipunto.', 1),
(DEFAULT, 'samsung.jpeg', 'Smartphone Samsung Galaxy S24 Ultra', 'Samsung', 'Smartphone flagship con pantalla Dynamic AMOLED 2X de 6.8", cámara de 200MP, S Pen incluido y procesador Snapdragon 8 Gen 3.', 1),
(DEFAULT, 'mac m3.jpeg', 'Notebook Apple MacBook Air M3', 'Apple', 'Laptop ultradelgada con chip M3, pantalla Liquid Retina de 13.6", 16GB de RAM y hasta 18 horas de autonomía.', 1),
(DEFAULT, 'smart tv lg.jpeg', 'Smart TV LG OLED 55" C3', 'LG', 'Televisor OLED con resolución 4K, procesador α9 Gen6, Dolby Vision IQ, Dolby Atmos y sistema operativo webOS 23.', 1),
(DEFAULT, 'ipad m4.jpeg', 'Tablet iPad Pro 11" M4', 'Apple', 'Tablet profesional con chip M4, pantalla Ultra Retina XDR OLED, compatible con Apple Pencil Pro y Magic Keyboard.', 1),
(DEFAULT, 'play 5.jpeg', 'Consola PlayStation 5 Slim', 'Sony', 'Consola de videojuegos de nueva generación con SSD ultrarrápido, soporte para 4K a 120fps, ray tracing y DualSense incluido.', 1),
(DEFAULT, 'monitor gamer.jpeg', 'Monitor Gamer ASUS ROG Swift 27" 240Hz', 'ASUS', 'Monitor gaming IPS QHD con tasa de refresco de 240Hz, tiempo de respuesta de 1ms, G-Sync Compatible y soporte HDR400.', 1),
(DEFAULT, 'mouse logitech.jpeg', 'Mouse Logitech MX Master 3S', 'Logitech', 'Mouse inalámbrico premium con scroll MagSpeed electromagnético, sensor de 8000 DPI, botones silenciosos y hasta 70 días de batería.', 1),
(DEFAULT, 'camara sony.jpeg', 'Cámara Mirrorless Sony Alpha ZV-E10 II', 'Sony', 'Cámara sin espejo APS-C ideal para creadores de contenido, con video 4K 60fps, autoenfoque por IA y pantalla abatible.', 1),
(DEFAULT, 'teclado.jpeg', 'Teclado Mecánico Keychron K8 Pro', 'Keychron', 'Teclado mecánico inalámbrico TKL con switches Gateron Pro, retroiluminación RGB, compatible con Mac y Windows.', 1);

/* INSERT  COMENTARIOS */
INSERT INTO comentarios (id, idProducto, idUsuario, texto) VALUES
-- Producto 1: Auriculares Bluetooth Sony WH-1000XM5
(DEFAULT, 1, 1, 'Increíbles, el sonido es espectacular y la cancelación de ruido es lo mejor que probé.'),
(DEFAULT, 1, 2, 'Muy cómodos para viajes largos. Los recomiendo 100%.'),
(DEFAULT, 1, 3, 'La batería dura muchísimo, ideal para trabajar desde casa.'),

-- Producto 2: Smartphone Samsung Galaxy S24 Ultra
(DEFAULT, 2, 4, 'La cámara es una locura, las fotos nocturnas son increíbles.'),
(DEFAULT, 2, 5, 'El S Pen hace la diferencia para tomar notas rápidas.'),

-- Producto 3: Notebook Apple MacBook Air M3
(DEFAULT, 3, 1, 'Perfecta para diseño gráfico, vuela con Figma y Photoshop abiertos.'),
(DEFAULT, 3, 3, 'La batería aguanta todo el día sin problema. Una joya.'),
(DEFAULT, 3, 2, 'Excelente para desarrollo, el compilador es rapidísimo.'),

-- Producto 4: Smart TV LG OLED 55" C3
(DEFAULT, 4, 5, 'Los negros son perfectos, nada que ver con un LED. Vale cada peso.'),
(DEFAULT, 4, 4, 'La imagen es impresionante para ver fotos y contenido HDR.'),

-- Producto 5: Tablet iPad Pro 11" M4
(DEFAULT, 5, 1, 'Con el Apple Pencil es como dibujar en papel, increíble.'),
(DEFAULT, 5, 2, 'Uso el teclado Magic y reemplaza completamente a una laptop.'),

-- Producto 6: Consola PlayStation 5 Slim
(DEFAULT, 6, 3, 'Los tiempos de carga son prácticamente cero, es una maravilla.'),
(DEFAULT, 6, 5, 'El DualSense con la vibración háptica cambia completamente la experiencia.'),
(DEFAULT, 6, 4, 'Spider-Man 2 se ve espectacular. Muy feliz con la compra.'),

-- Producto 7: Monitor Gamer ASUS ROG Swift 27" 240Hz
(DEFAULT, 7, 2, 'Perfecto para programar, tiene mucho espacio en pantalla.'),
(DEFAULT, 7, 1, 'A 240Hz los juegos competitivos se sienten muy fluidos.'),

-- Producto 8: Mouse Logitech MX Master 3S
(DEFAULT, 8, 3, 'El mejor mouse que tuve, el scroll electromagnético es adictivo.'),
(DEFAULT, 8, 1, 'Muy preciso para trabajos de diseño, la forma es muy ergonómica.'),
(DEFAULT, 8, 2, 'Lo uso 8 horas por día y no cansa la muñeca para nada.'),

-- Producto 9: Cámara Mirrorless Sony Alpha ZV-E10 II
(DEFAULT, 9, 4, 'El autoenfoque en video es impresionante, nunca pierde la cara.'),
(DEFAULT, 9, 5, 'Excelente para empezar en fotografía profesional.'),

-- Producto 10: Teclado Mecánico Keychron K8 Pro
(DEFAULT, 10, 2, 'Escribir en este teclado es un placer, los switches son suaves.'),
(DEFAULT, 10, 3, 'La conexión bluetooth es estable y cambia entre dispositivos genial.'),
(DEFAULT, 10, 1, 'El RGB se ve muy bonito y la build quality es sólida.');
