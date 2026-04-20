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