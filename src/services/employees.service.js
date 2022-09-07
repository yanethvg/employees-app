const boom = require('@hapi/boom');

class EmployeesService {
  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'Alex',
        lastname: 'Menedez',
        type_document: 'DUI',
        document: '00000000',
      },
      {
        id: 2,
        name: 'Melina',
        lastname: 'Menendez',
        type_document: 'DUI',
        document: '00000000',
      },
    ];
    this.cantidad = this.employees.length;
  }
  async create(data) {
    const newEmployee = {
      id: this.cantidad++,
      ...data,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
  async find() {
    return this.employees;
  }
  async findOne(id) {
    const employee = this.employees.find((employee) => employee.id == id);
    if (!employee) {
      throw boom.notFound('Employee not Found');
    }
    return employee;
  }
  async update(id, changes) {
    const index = this.employees.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Employee not Found');
    }
    const employee = this.employees[index];
    this.employees[index] = {
      ...employee,
      ...changes,
    };
    return this.employees[index];
  }
  async delete(id) {
    const index = this.employees.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Employee not Found');
    }
    this.employees.splice(index, 1);
    id = parseInt(id);
    return id;
  }
}

module.exports = {
  EmployeesService,
};
