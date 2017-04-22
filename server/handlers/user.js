const User = require('../db/controllers/user.js');
const util = require('../db/util.js');

// create adds a new user to database
const create = (req, res) => {
  const salt = util.genSalt();
  const hash = util.sha(req.body.password, salt);
  const user = {
    username: req.body.username,
    hash: hash,
    salt: salt,
    isAdmin: req.body.isAdmin
  };

  User.findOne({username: req.body.username}, (err, result) => {
    // username already exists in db
    if (!err || result) {
      return res.status(400).json({err: 'bad request'});
    }

    User.insertOne(user, (err, newUser) => {
      // error in saving
      if (err) {
        return res.status(400).json({err: 'bad request'});
      }

      createSession(req, user);
      res
        .status(200)
        .json({username: newUser.username, isAdmin: newUser.isAdmin});
    });
  });
};

// login authenticates user, if authed creates user session
const login = (req, res) => {
  User.findOne(req.body.username, (err, user) => {
    if (err || !user) {
      return res.status(404).json({err: 'user not found'});
    }

    const attemptedHash = util.sha(req.body.password, user.salt);
    if (user.hash == attemptedHash) {
      createSession(req, user);
      res.status(200).json({username: user.username, isAdmin: user.isAdmin});
    } else {
      return res.status(400).json({err: 'bad request'});
    }
  });
};

// auth returns current user information if logged in
const auth = (req, res) => {
  if (isLoggedIn(req)) {
    user = {username: req.session.username, isAdmin: req.session.isAdmin};
    res.status(200).json({username: user.username, isAdmin: user.isAdmin});
  } else {
    res.status(401).end();
  }
};

// logout destroys user session and redirects to root
const logout = (req, res) => {
  req.session.destroy();
  res.status(302).end();
};

const createSession = (req, user) => {
  req.session.username = user.username;
  req.session.isAdmin = user.isAdmin;
};

const isLoggedIn = req => {
  return req.session ? !!req.session.username : false;
};

module.exports = {create, login, logout, auth};