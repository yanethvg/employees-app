const boom = require('@hapi/boom');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');

class AuthService {
  constructor() {}

  // async sign_in(data) {
  //   let { email, password } = data;
  //   //  Finding user
  //   const user = await User.findOne({
  //     where: {
  //       email: email,
  //     },
  //   });
  //   if (!user) {
  //     throw boom.notFound('User with this email not found');
  //   }
  // }
  // async signup(data) {
  //   let { email, name, last_name, password } = data;
  // }
}

module.exports = {
  AuthService,
};
