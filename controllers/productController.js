const localData = require('../localData/data');

const productsController = {
  listar: function(req, res) {
    return res.render('product', { products: localData.products });
  },

  add : function(req, res) {
    return res.render('product-add', { products: localData.products });
  },

   edit : function(req, res) {
    return res.render('product-add', { products: localData.products });
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
      titulo: "Detalles del producto " + idBuscado
    });
  }
};

module.exports = productsController;