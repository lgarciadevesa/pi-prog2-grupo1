const localData = require('../localData/data');

const productsController = {
  listar: function(req, res) {
    return res.render('product', { products: localData.products });
  },

  search: function(req, res) {
    res.render('search-results', {logueado: true});
  },

  add : function(req, res) {
    return res.render('product-add', { products: localData.products, logueado: true, usuario: localData.usuario });
  },

   edit : function(req, res) {
    return res.render('product-add', { products: localData.products, logueado: true, usuario: localData.usuario });
  },
  
  id: function(req, res) {
    let idBuscado = Number(req.params.id);
    let productoPorId = null;

    for (let i = 0; i < localData.products.length; i++) {
      if (localData.products[i].id === idBuscado) {
        productoPorId = localData.products[i];
      }
    }

    return res.render("product", {
      data: productoPorId,
      titulo: "Detalles del producto " + idBuscado,
      logueado: true,
      usuario: localData.usuario

    });
  }
};

module.exports = productsController;