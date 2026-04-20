create schema dbCatalogo; 
use dbCatalogo;

CREATE TABLE usuarios (
	id INT unsigned PRIMARY KEY auto_increment,
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

