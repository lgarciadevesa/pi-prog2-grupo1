const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);


router.post('/newuser', usersController.newUser);
router.post('/processLogin', usersController.processLogin);

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);

module.exports = router;