const { verifyAsync } = require('../utils');

const checkAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/sign');

  return verifyAsync(token)
    .then((decoded) => {
      req.decoded = decoded;
      next();
    })
    .catch((err) => next(err));
};

module.exports = checkAuth;
