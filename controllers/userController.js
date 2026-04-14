const localData = require('../localData/data');
const { profile } = require('./indexController');

const userController = {

  login: function(req, res) {
    res.render('login', {logueado: false} );
  },
 
  profile: function(req, res) {
    res.render('profile', {logueado: true, usuario: localData.usuario, products: localData.products});
  },

   register: function(req, res) {
    res.render('register', {logueado: false});
  },
  
 

 
 
};

module.exports = userController;