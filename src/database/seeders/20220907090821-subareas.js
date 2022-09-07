const faker = require('faker');

const subAreas = [...Array(10)].map(() => ({
  //subarea
  name: faker.commerce.department(),
  area_id: faker.finance.routingNumber(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SubAreas', subAreas, {});
  },
  down: (queryInterface) => {
    //, Sequelize
    return queryInterface.bulkDelete('SubAreas', null, {});
  },
};
