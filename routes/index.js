const { Router } = require('express');
const { employeesRouter } = require('./employees.router');


function routerApi(app){
  const mainRouter = Router()
  app.use("/api",mainRouter)
  mainRouter.use('/employees', employeesRouter);
}

module.exports={
  routerApi
};
