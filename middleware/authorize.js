const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  // get token from header
  const token = req.header('jwt_token');

  // check if not token
  if (!token) {
    return res.status(403).json({ msg: 'Authorization denied!' });
  }

  // verify token
  try {
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;

    // continue if token is valid
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid!' });
  }
};
