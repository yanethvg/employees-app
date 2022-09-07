class EmployeesService{
  constructor(){
    this.employees = [
      {
        id: 1,
        name: 'Alex',
        lastname: 'Menedez'
      },
      {
        id: 2,
        name: 'Melina',
        lastname: 'Menendez'
      },
    ];
    this.cantidad = this.employees.length;
  }
  async create(data){
    const newEmployee = {
      id: this.cantidad++,
      ...data
    }
    this.employees.push(newEmployee);
    return newEmployee;
  }
  async find(){
    return this.employees;
  }
  async findOne(id){
    return this.employees.find(employee => employee.id == id);
  }
  async update(id,changes){
    const index = this.employees.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('employee not found');
    }
    const employee = this.employees[index];
    this.employees[index] = {
      ...employee,
      ...changes
    };
    return this.employees[index];
  }
  async delete(id){
    const index = this.employees.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('employee not found');
    }
    this.employees.splice(index, 1);
    return { id };
  }
}

module.exports ={
  EmployeesService
}
