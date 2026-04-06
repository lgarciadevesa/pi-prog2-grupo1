var express = require('express');
var router = express.Router();
var products = require('../data/products');

router.get('/', function(req, res, next) {
    console.log(products.lista);
  
  res.render('index', { products: products.lista });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/search', function(req, res, next) {
  res.render('search-results');
});

module.exports = router;
