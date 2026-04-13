var express = require('express');
var router = express.Router();

const localData = require('../localData/data');

router.get('/', function(req, res, next) {
    console.log(localData.products);
  res.render('index', { products: localData.products, logueado: false });
});



module.exports = router;
