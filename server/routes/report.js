const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth.js');
const reportHandler = require('../handlers/report.js');

router.get('/', middleware.isLoggedIn, reportHandler.query);

module.exports = router;