const { Router } = require('express');
const employeesRouter = Router();

const { EmployeesService } = require('./../services/employees.service');
const { validatorHandler } = require('./../middlewares/validator.handler');
const authHandler = require('./../middlewares/auth.hanlder');
const {
  createEmployeeSchema,
  updateEmployeeSchema,
  getEmployeeSchema,
} = require('./../schemas/employee.schema');

// I create a instance of EmployeesService
const service = new EmployeesService();

employeesRouter.get('/', authHandler, async (req, res) => {
  let limit = 10; // number of records per page
  let offset = 0;
  let page = req.query.page || 1;
  console.log(page); // page number
  offset = limit * (page - 1);
  const search = req.query.search;
  console.log(offset);
  const employees = await service.find(search, limit, offset);
  const total = await service.total();
  let pages = Math.ceil(total / limit);

  res.status(200).json({
    employees,
    pages,
  });
});

employeesRouter.get(
  '/:id',
  authHandler,
  validatorHandler(getEmployeeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const employee = await service.findOne(id);
      res.status(200).json({
        id,
        employee,
      });
    } catch (error) {
      next(error);
    }
  }
);

employeesRouter.post(
  '/',
  authHandler,
  validatorHandler(createEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const employee = await service.create(body);
      res.status(201).json({
        message: 'created',
        employee,
      });
    } catch (error) {
      next(error);
    }
  }
);

employeesRouter.put(
  '/:id',
  authHandler,
  validatorHandler(getEmployeeSchema, 'params'),
  validatorHandler(updateEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const employee = await service.update(id, body);
      res.status(200).json({
        message: 'Updated',
        employee,
        id,
      });
    } catch (error) {
      next(error);
    }
  }
);

employeesRouter.delete(
  '/:id',
  authHandler,
  validatorHandler(getEmployeeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const idDeleted = await service.delete(id);
      res.status(200).json({
        message: 'Deleted',
        idDeleted,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = {
  employeesRouter,
};
