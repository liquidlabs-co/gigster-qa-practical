const Expense = require('../db/controllers/expense.js');

const query = (req, res) => {
  const owner = req.session.username;
  const start = new Date(req.query.start);
  const end = new Date(req.query.end);
  Expense.aggregateDateRange(owner, start, end, (err, result) => {
    if (err || !result) {
      return res.status(404).json({err: 'expenses not found'});
    }

    res.status(200).json({expenses: result});
  });
};

module.exports = {query};