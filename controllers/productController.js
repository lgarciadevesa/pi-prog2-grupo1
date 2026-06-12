const localData = require('../localData/data');
let db = require("../database/models");
const op = db.Sequelize.Op;
const productsController = {
  listar: function (req, res) {
    return res.render('product', { });
  },

  search: function (req, res) {
    let busqueda = req.query.search;

    db.Producto.findAll({
      where: {
        nombreProducto: {
          [op.like]: "%" + busqueda + "%"
        }
      }
    })
      .then(function (resultados) {
        return res.render("search-results", { productos: resultados, busqueda: busqueda });
      })
      .catch(function (error) {
        return res.send(error);
      });
  },

  add: function (req, res) {
    return res.render('product-add', { });
  },

   create: function (req, res) {

        db.Producto.create({
          imagenProducto: req.body.imagen,
          nombreProducto: req.body.nombre,
          descripcionProducto: req.body.descripcion,
          marcaProducto: req.body.marca,
          idUsuario: req.session.user.id
        })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                console.log(error);
                res.render('product-add', { errors: error.errors });
            });
    },
    edit: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render('edit', { user: user });
            })
            .catch(function (error) {
                console.log(error);
                res.redirect('/');
            });
    },

  edit: function (req, res) {
    db.Producto.findByPk(req.params.id)
      .then(function (producto) {
        res.render('product-edit', { producto: producto });
      })
      .catch(function (error) {
        console.log(error);
        res.redirect('/');
      });
  },

  update: function (req, res) {
    db.Producto.update({
      nombreProducto: req.body.nombre,
      descripcionProducto: req.body.descripcion,
      imagenProducto: req.body.imagen,
      marcaProducto: req.body.marca
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(function () {
        res.redirect('/');
      })
      .catch(function (error) {
        console.log(error);
        res.render('product-edit', { product: req.body, errors: error.errors });
      });
  },

  id: function (req, res) {
    let idBuscado = Number(req.params.id);
    let productoPorId = null;

    db.Producto.findByPk(idBuscado, {
      include: [
        { association: 'comentarios' }
      ]
    })
      .then(function (producto) {
        if (producto) {
          productoPorId = producto;
        }
        return res.render("product", {
          data: productoPorId,
          titulo: "Detalles del producto " + idBuscado,
          logueado: true,
          usuario: localData.usuario
        });
      })
      .catch(function (error) {
        res.send(error);
      });
  },
  addComentario: function (req, res) {
    db.Comentario.create({
      texto: req.body.texto,
      idProducto: req.params.id,
      idUsuario: req.session.user.id
    })
      .then(function () {
        res.redirect('/products/detalle/' + req.params.id);
      })
      .catch(function (error) {
        console.log(error);
        res.redirect('/products/detalle/' + req.params.id);
      });
  }
};

module.exports = productsController;