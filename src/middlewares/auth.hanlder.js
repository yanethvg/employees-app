const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const authConfig = require('./../config/auth');

module.exports = (req, res, next) => {
  // checking token exists
  if (!req.headers.authorization) {
    throw boom.unauthorized('Unauthorized access');
  } else {
    let token = req.headers.authorization.split(' ')[1];

    //  Checking validity of token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw boom.badImplementation('There was a problem decoding the token');
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
