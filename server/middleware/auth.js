const isLoggedIn = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.status(401).json({err: 'unauthorized'});
  }
};

module.exports = {isLoggedIn};