const { Router } = require('express');
const { register, login, logout, profile } = require('../controllers/auth.controller.js');
const authRequired = require('../middlewares/validateJWT.middleware.js');

const router = Router();

// Register an account
router.post('/register', register);

// Log in the page
router.post('/login', login);

// Log out the page
router.post('/logout', logout);

router.get('/profile', authRequired, profile);

module.exports = router;