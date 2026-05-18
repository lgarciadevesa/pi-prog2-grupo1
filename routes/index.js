var express = require('express');
var router = express.Router();
const productController = require('../controllers/indexController');

const localData = require('../localData/data');

router.get('/', productController.home);



module.exports = router;
