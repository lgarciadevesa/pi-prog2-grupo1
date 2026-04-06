const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.listar);

router.get('/add', productController.add);

router.get('/edit/:id', productController.edit);

router.get('/detalle/:id', productController.id);

module.exports = router;
