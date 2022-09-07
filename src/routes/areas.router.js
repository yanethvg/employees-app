const { Router } = require('express');
const areasRouter = Router();

const {AreasService} = require('./../services/areas.service');
const authHandler = require('./../middlewares/auth.hanlder');

// I create a instance of EmployeesService
const service = new AreasService();

areasRouter.get('/', authHandler, async (req, res) => {
  const employees = await service.find();
  res.status(200).json(employees);
});

areasRouter.get('/:id', authHandler, async (req, res,next) => {
  try {
    const { id } = req.params;
    const area = await service.findOne(id);
    res.status(200).json({
      id,
      area,
    });
  } catch (error) {
    next(error);
  }
});

module.exports ={
  areasRouter
}
