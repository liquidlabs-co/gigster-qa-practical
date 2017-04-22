const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  id: {type: String, unique: true},
  owner: String,
  datetime: Date,
  amount: Number,
  description: String
});

const ExpenseModel = mongoose.model('Expense', expenseSchema);

module.exports = ExpenseModel;