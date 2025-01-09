/* Module Dependencies */
const express = require('express');
const authController = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const router = express.Router();

/* Route to register a new user :
  
 - @name POST /auth/register
 - @function
 - @memberof module:routes/auth~authRouter
 - @inner
 - @param {string} path - Express path.
 - @param {function} middleware - Middleware to validate request.
 - @param {function} middleware - Controller to handle registration.
*/
router.post('/register', validateRequest(['username','email']),authController.register);

/* Route to login a user :
  
 - @name POST /auth/login
 - @function
 - @memberof module:routes/auth~authRouter
 - @inner
 - @param {string} path - Express path.
 - @param {function} middleware - Middleware to validate request.
 - @param {function} middleware - Controller to handle login.
*/
router.post('/login', validateRequest(['username','email']), authController.login);

module.exports = router;
