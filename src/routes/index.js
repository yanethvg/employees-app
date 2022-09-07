const { Router } = require('express');
const { employeesRouter } = require('./employees.router');
const { authRouter } = require('./auth.router');

function routerApi(app) {
  const mainRouter = Router();
  app.use('/api', mainRouter);
  mainRouter.use('/', authRouter);
  mainRouter.use('/employees', employeesRouter);
}

module.exports = {
  routerApi,
};
