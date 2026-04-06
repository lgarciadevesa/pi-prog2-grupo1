var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/add', function(req, res, next) {
  res.render('product-add');
});

router.get('/edit/:id', function(req, res, next) {
  res.render('product-edit');
});

router.get('/:id', function(req, res, next) {
  res.render('product');
});

module.exports = router;
