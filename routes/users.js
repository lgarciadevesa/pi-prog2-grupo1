const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile/:id', usersController.profile);


router.post('/newuser', usersController.newUser);
router.post('/processLogin', usersController.processLogin);

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);
router.post('/logout/', usersController.logout);

module.exports = router;