const localData = require('../localData/data');

const indexController = {
  
  login: function(req, res) {
    res.render('login');
  },
  register: function(req, res) {
    res.render('register');
  },
  profile: function(req, res) {
    res.render('profile');
  },
  search: function(req, res) {
    res.render('search-results');
  }
  
};

module.exports = indexController;