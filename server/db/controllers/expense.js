const Expense = require('../models/expense.js');

const insertOne = (expense, callback) => {
  Expense.create(expense, callback);
};

const findOne = (id, callback) => {
  Expense.findOne({id: id}, callback);
};

const removeOne = (id, callback) => {
  Expense.findOneAndRemove({id: id}, callback);
};

const updateOne = (id, expense, callback) => {
  Expense.findOneAndUpdate({id: id}, expense, {new: true}, callback);
};

const queryDateRange = (owner, start, end, callback) => {
  const query = {datetime: {$gte: start, $lte: end}, owner: owner};
  Expense.find(query, callback);
};

const aggregateDateRange = (owner, start, end, callback) => {
  const query = {datetime: {$gte: start, $lte: end}, owner: owner};
  Expense.aggregate(
    [
      {$match: query},
      {
        $group: {
          _id: {year: {$year: '$datetime'}, week: {$week: '$datetime'}},
          totalAmount: {$sum: '$amount'},
          count: {$sum: 1}
        }
      }
    ],
    callback
  );
};

module.exports = {
  insertOne,
  findOne,
  removeOne,
  updateOne,
  queryDateRange,
  aggregateDateRange
};