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
  deletedAt timestamp DEFAULT  current_timestamp ON UPDATE current_timestamp,
  FOREIGN KEY (idProducto) REFERENCES products(id),
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

/* INSERT */

INSERT INTO usuarios (id, usuario, email, contrasenna, fotoPerfil)
VALUES
(default, 'Miguel', 'usuario1@gmail.com', '12345678', 'profile-default.png'),
(default, 'maria_gamer', 'maria_gamer@gmail.com', '12345678', 'profile-default.png'),
(default, 'pepe_tech', 'pepe_tech@gmail.com', '12345678', 'profile-default.png'),
(default, 'luli.dev', 'luli.dev@gmail.com', '12345678', 'profile-default.png'),
(default, 'rodrigo_foto', 'rodrigo_foto@gmail.com', '12345678', 'profile-default.png');

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

