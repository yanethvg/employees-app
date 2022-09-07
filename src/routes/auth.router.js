const { Router } = require('express');
const authRouter = Router();
const { AuthService } = require('./../services/auth.service');
const { validatorHandler } = require('./../middlewares/validator.handler');
const { signInSchema, signUpSchema } = require('./../schemas/auth.schema');

// I create a instance of AuthService
const service = new AuthService();

authRouter.post(
  '/signin',
  validatorHandler(signInSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { token, user } = await service.sign_in(body);
      res.status(200).json({
        message: 'authorized',
        token,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

authRouter.post(
  '/signup',
  validatorHandler(signUpSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { token, user } = await service.sign_up(body);
      res.status(200).json({
        message: 'authorized',
        token,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = {
  authRouter,
};
