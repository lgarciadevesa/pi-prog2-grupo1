var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { log } = require('debug/src/browser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.get('/login', userController.login);
;

router.get('/register', userController.register);

router.get('/profile', userController.profile);

module.exports = router;
