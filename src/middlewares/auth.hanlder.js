const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const authConfig = require('./../config/auth');

module.exports = (req, res, next) => {
  // checking token exists
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else {
    throw boom.unauthorized('Unauthorized access');
  }
  //  Checking validity of token
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      throw boom.badImplementation('There was a problem decoding the token');
    } else {
      req.user = decoded;
      next();
    }
  });
};
