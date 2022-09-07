const { Router } = require('express');
const employeesRouter = Router();


employeesRouter.get('/',(req,res) => {
  // const {size} = req.query;
  // console.log(size);
  const employees = [
    {
      id: 1,
      name: 'Alex',
      lastname: 'Menedez'
    },
    {
      id: 1,
      name: 'Melina',
      lastname: 'Menedez'
    },
  ];

  res.status(200).json(employees);
});

employeesRouter.post('/', (req,res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

employeesRouter.put('/:id', (req,res) =>{
  const {id} = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'Updated',
    data: body,
    id
  });
});

employeesRouter.delete('/:id', (req,res) => {
  const {id} = req.params;
  res.status(200).json({
    message: 'Deleted',
    id
  });
})

module.exports = {
  employeesRouter
}
