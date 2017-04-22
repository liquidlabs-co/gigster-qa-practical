const express = require('express');
const router = express.Router();
const userHandler = require('../handlers/user.js');

// creates new user in database
router.post('/', userHandler.create);

// authenticates user, and will create user session if authed
router.post('/login', userHandler.login);

// check user auth status
router.get('/auth', userHandler.auth);

// destroys user session
router.post('/logout', userHandler.logout);

module.exports = router;