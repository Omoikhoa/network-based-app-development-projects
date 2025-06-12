const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/new', userController.getSignUpForm);
router.post('/', userController.createUser);
router.get('/login', userController.getLoginForm);
router.post('/login', userController.loginUser);
router.get('/profile', userController.getProfile);
router.get('/logout', userController.logoutUser);

module.exports = router;