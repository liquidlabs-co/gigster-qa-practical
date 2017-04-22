const Expense = require('../db/controllers/expense.js');
const util = require('../db/util.js');

// create
const create = (req, res) => {
  const expense = {
    id: util.genId(),
    owner: req.session.username,
    datetime: req.body.datetime,
    amount: req.body.amount,
    description: req.body.description
  };

  Expense.insertOne(expense, (err, newResult) => {
    if (err) {
      return res.status(400).json({err: 'bad request'});
    }

    res.status(201).json(newResult);
  });
};

// find
const find = (req, res) => {
  Expense.findOne(req.params.id, (err, expense) => {
    if (err || !expense) {
      return res.status(404).json({err: 'expense not found'});
    }

    if (req.session.username === expense.owner || req.session.isAdmin) {
      return res.status(200).json(expense);
    }

    res.status(401).json({err: 'unauthorized'});
  });
};

// update
const update = (req, res) => {
  const expense = {
    id: req.body.id,
    owner: req.session.username,
    datetime: req.body.datetime,
    amount: req.body.amount,
    description: req.body.description
  };

  Expense.findOne(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).json({err: 'bad request'});
    }

    if (req.session.username !== result.owner) {
      return res.status(401).json({err: 'unauthorized'});
    }

    Expense.updateOne(req.params.id, expense, (err, result) => {
      if (err) {
        return res.status(400).json({err: 'bad request'});
      }

      res.status(200).json(result);
    });
  });
};

// remove
const remove = (req, res) => {
  Expense.findOne(req.params.id, (err, expense) => {
    if (err) {
      return res.status(400).json({err: 'bad request'});
    }

    if (req.session.username !== expense.owner) {
      return res.status(401).json({err: 'unauthorized'});
    }

    Expense.removeOne(req.params.id, (err, expense) => {
      if (err) {
        return res.status(400).json({err: 'bad request'});
      }

      res.status(200).json(expense);
    });
  });
};

module.exports = {create, find, update, remove};