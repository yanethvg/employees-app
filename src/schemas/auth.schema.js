const Joi = require('joi');

const name = Joi.string().min(4);
const last_name = Joi.string().min(4);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const email = Joi.string().email({
  minDomainSegments: 2,
});

const signUpSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  password: password.required(),
  email: email.required(),
});

const signInSchema = Joi.object({
  password: password,
  email: email,
});

module.exports = {
  signInSchema,
  signUpSchema,
};
