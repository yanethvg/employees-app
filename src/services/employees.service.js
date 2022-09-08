const boom = require('@hapi/boom');
const { Employee } = require('../models/index');
const { Op } = require("sequelize");

class EmployeesService {
  constructor() {
    this.employees = [];
  }
  async create(data) {
    let newEmployee = Employee.build({
        ...data
    })
    newEmployee = await newEmployee.save()
    return newEmployee;
  }
  async find(search) {
    if(!search){
      return await Employee.findAll({ include: ["subareas"], order: [['id', 'ASC']] });
    }else{
      return await Employee.findAll({
        where: {
          [Op.or]: [
            { name: {
                [Op.like]: `%${search}%`
              }
            },
            { document:  {
                [Op.like]: `%${search}%`
              }
             }
          ]
        },include: ["subareas"], order: [['id', 'ASC']]
      });
    }

  }
  async findOne(id) {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    return employee;
  }
  async update(id, changes) {
    const employee = await Employee.findByPk(id);
    // console.log(employee)
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    let employeeUpdated = Employee.update(
      changes,
      {where:{
        id
        }
      })
    return employeeUpdated;
  }
  async delete(id) {
    const employee = await Employee.findByPk(id);
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
