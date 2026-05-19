const localData = require('../localData/data');
let db = require("../database/models");
const productsController = {
  listar: function(req, res) {
    return res.render('product', { products: localData.products });
  },

  search: function(req, res) {
    res.render('search-results', {products: localData.products, usuario: localData.usuario, logueado: true});
  },

  add : function(req, res) {
    return res.render('product-add', { products: localData.products, logueado: true, usuario: localData.usuario });
  },

   edit : function(req, res) {
    return res.render('product-add', { products: localData.products, logueado: true, usuario: localData.usuario });
  },

  id : function(req, res) {
    let idBuscado = Number(req.params.id);
    let productoPorId = null;

    db.Producto.findByPk(idBuscado, {
        include: [
            { association: 'comentarios' }  
        ]
    })  
      .then(function(producto) {
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
      .catch(function(error) {
        res.send(error);
      });
  }
};

module.exports = productsController;