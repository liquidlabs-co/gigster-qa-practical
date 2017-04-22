const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth.js');
const expenseHandler = require('../handlers/expense.js');

// creates new expense
router.post('/', middleware.isLoggedIn, expenseHandler.create);

// find one expense
router.get('/:id', middleware.isLoggedIn, expenseHandler.find);

// update one expense
router.put('/:id', middleware.isLoggedIn, expenseHandler.update);

// remove one expense
router.delete('/:id', middleware.isLoggedIn, expenseHandler.remove);

module.exports = router;