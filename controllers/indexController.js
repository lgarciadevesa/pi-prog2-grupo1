let db = require('../database/models');

const indexController = {

  home: function(req, res) {
    db.Producto.findAll()
      .then(function(products) {
        res.render('index', { products: products });
      })
      .catch(function(error) {
        res.send(error);
      });
  }

};

module.exports = indexController;