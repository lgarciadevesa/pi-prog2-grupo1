const localData = require('../localData/data');
const { profile } = require('./indexController');

const userController = {

  profile: function(req, res) {
    res.render('profile');
  },
 
};

module.exports = userController;