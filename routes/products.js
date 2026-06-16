const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const productController = require('../controllers/productController');

const validacionesProducto = [
  body('imagen')
    .notEmpty().withMessage('Debes completar la imagen').bail()
    .isLength({ min: 3 }).withMessage('La imagen debe tener al menos 3 caracteres'),
  body('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
  body('descripcion')
    .notEmpty().withMessage('Debes completar la descripción').bail()
    .isLength({ min: 3 }).withMessage('La descripción debe tener al menos 3 caracteres'),
  body('marca')
    .notEmpty().withMessage('Debes completar la marca').bail()
    .isLength({ min: 3 }).withMessage('La marca debe tener al menos 3 caracteres')
];

router.get('/', productController.listar);

router.get('/add', productController.add);

router.get('/edit/:id', productController.edit);

router.get('/detalle/:id', productController.id);

router.get('/search', productController.search);

router.post('/update/:id', productController.update);

router.post('/create', validacionesProducto, productController.create);

router.post('/delete/:id', productController.delete);

router.post('/addComentario/:id', productController.addComentario);

module.exports = router;
