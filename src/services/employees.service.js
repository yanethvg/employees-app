const boom = require('@hapi/boom');
const { Employee } = require('../models/index');

class EmployeesService {
  constructor() {
    this.employees = [];
  }
  async create(data) {
    let newEmployee = Employee.build({
        ...data
    })
    newEmployee = await newEmployee.save()
    this.employees.push(newEmployee);
    return newEmployee;
  }
  async find() {
    return await Employee.findAll();
  }
  async findOne(id) {
    const employee = await Employee.find({
      where:{
        id
      }
    })
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    return employee;
  }
  async update(id, changes) {
    const employee = await Employee.find({
      where:{
        id
      }
    })
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    let employeeUpdated = Employee.update(...changes,{where:{
      id
    }})
    return employeeUpdated;
  }
  async delete(id) {
    const employee = await Employee.find({
      where:{
        id
      }
    })
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    await Employee.destroy({
      where:{
        id
      }
    })
    id = parseInt(id);
    return id;
  }
}

module.exports = {
  EmployeesService,
};
