const User = require('../models/user.js');

const findOne = (username, callback) => {
  User.findOne({username: username}, callback);
};

const insertOne = (user, callback) => {
  User.create(user, callback);
};

module.exports = {findOne, insertOne};