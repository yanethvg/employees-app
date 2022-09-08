const boom = require('@hapi/boom');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('./../config/auth');

class AuthService {
  constructor() {}

  async sign_in(data) {
    let { email, password } = data;
    //  Finding user
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw boom.notFound('User with this email not found');
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        return {
          token,
          user,
        };
      } else {
        // Unauthorized Access
        throw boom.unauthorized('Incorrect password');
      }
    }
  }
  async sign_up(data) {
    let { email, name, last_name, password } = data;
    const passwordEncrypt = bcrypt.hashSync(
      password,
      Number.parseInt(authConfig.rounds)
    );
    // create user
    const user = await User.create({
      name: name,
      email: email,
      last_name: last_name,
      password: passwordEncrypt,
    });
    // Creamos el token
    let token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });
    return { token, user };
  }
}

module.exports = {
  AuthService,
};
