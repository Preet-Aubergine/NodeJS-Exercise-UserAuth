const express = require('express');
const authController = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const router = express.Router();

// register
router.post('/register', validateRequest(['username','email']),authController.register);

// login
router.post('/login', validateRequest(['username','email']), authController.login);

module.exports = router;
