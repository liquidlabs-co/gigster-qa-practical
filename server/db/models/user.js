const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  hash: String,
  salt: String,
  isAdmin: Boolean
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;