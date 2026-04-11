var express = require('express');
var router = express.Router();

const localData = require('../localData/data');

router.get('/', function(req, res, next) {
    console.log(localData.products);
  res.render('index', { products: localData.products });
});

router.get('/search', function(req, res, next) {
  res.render('search-results');
});

module.exports = router;
