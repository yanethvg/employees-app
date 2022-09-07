const faker = require('faker');

const Areas = [...Array(10)].map(() => ({
  //subarea
  name: faker.commerce.department(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('areas', Areas, {});
    const areas = await queryInterface.sequelize.query(
      `SELECT id from areas;`
    );
    const areasRows = areas[0];
    // console.log(areasRows);
    return await queryInterface.bulkInsert('subareas',[
      {name: 'Moda ', area_id: areasRows[0].id,createdAt: new Date(),updatedAt: new Date()},
      {name: 'Zapatos ', area_id: areasRows[0].id,createdAt: new Date(),updatedAt: new Date()},
      {name: 'Prestamos', area_id: areasRows[0].id,createdAt: new Date(),updatedAt: new Date()},
    ], {});
  },
  down: async (queryInterface) => {
    //, Sequelize
    await queryInterface.bulkDelete('subareas', null, {});
    await queryInterface.bulkDelete('areas', null, {});

  },
};
