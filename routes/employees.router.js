const { Router } = require('express');
const employeesRouter = Router();

const { EmployeesService  } = require('./../services/employees.service')

// I create a instance of EmployeesService
const service = new EmployeesService();


employeesRouter.get('/', async (req,res) => {
  const employees = await service.find();
  res.status(200).json(employees);
});

employeesRouter.get('/:id',async (req,res) => {
  const {id} = req.params;
  const employee = await service.findOne(id);
  res.status(200).json({
    id,
    employee
  });
});

employeesRouter.post('/', async (req,res) => {
  const body = req.body;
  const employee = await service.create(body);
  res.status(201).json({
    message: 'created',
    employee
  });
});


employeesRouter.put('/:id',async (req,res) =>{
  try {
    const {id} = req.params;
    const body = req.body;
    const employee = await service.update(id,body)
    res.status(200).json({
      message: 'Updated',
      employee,
      id
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

employeesRouter.delete('/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const rta = await service.delete(id)
    res.status(200).json({
      message: 'Deleted',
      id: rta
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = {
  employeesRouter
}
