const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/userController');

const validacionesRegistro = [
  body('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
];

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile/:id', usersController.profile);


router.post('/newuser', validacionesRegistro, usersController.newUser);
router.post('/processLogin', usersController.processLogin);

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);
router.post('/logout/', usersController.logout);

module.exports = router;