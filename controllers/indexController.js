const localData = require('../localData/data');

const indexController = {

  home: function(req, res) {
    res.render('index', {logueado: false, products: localData.products });
  }

};

module.exports = indexController;