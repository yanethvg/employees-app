const faker = require('faker');

let idRandom = 1;
const subAreas = [...Array(10), idRandom].map(() => ({
  //subarea
  name: faker.commerce.department(),
  area_id: idRandom++,
  createdAt: new Date(),
  updatedAt: new Date(),
}, include: "areas"));
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SubAreas', subAreas, {});
  },
  down: (queryInterface) => {
    //, Sequelize
    return queryInterface.bulkDelete('SubAreas', null, {});
  },
};
