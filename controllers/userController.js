const localData = require('../localData/data');
const { profile } = require('./indexController');

const userController = {

  profile: function(req, res) {
    res.render('profile');
  },

   register: function(req, res) {
    res.render('register');
  },
   login: function(req, res) {
    res.render('login');
  },
 

 
 
};

module.exports = userController;