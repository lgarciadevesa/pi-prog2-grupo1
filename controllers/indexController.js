const localData = require('../localData/data');

const indexController = {

  home: function(req, res) {
    res.render('index', {logueado: false});
  }

};

module.exports = indexController;