const faker = require('faker');

const Areas = [...Array(10)].map(() => ({
  //subarea
  name: faker.commerce.department(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Areas', Areas, {});
  },
  down: (queryInterface) => {
    //, Sequelize
    return queryInterface.bulkDelete('Areas', null, {});
  },
};
