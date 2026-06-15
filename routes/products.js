const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.listar);

router.get('/add', productController.add);

router.get('/edit/:id', productController.edit);

router.get('/detalle/:id', productController.id);

router.get('/search', productController.search);

router.post('/update/:id', productController.update);

router.post('/create', productController.create);

router.post('/delete/:id', productController.delete);

router.post('/addComentario/:id', productController.addComentario);

module.exports = router;
