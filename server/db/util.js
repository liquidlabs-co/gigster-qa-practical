const crypto = require('crypto');

const genSalt = () => {
  return crypto.randomBytes(8).toString('hex').slice(0, 16);
};

const sha = (password, salt) => {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
};

const genId = () => {
  return crypto.randomBytes(8).toString('hex').slice(0, 7);
};

module.exports = {genSalt, sha, genId};