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

    await queryInterface.bulkInsert('subareas',[
      {name: faker.commerce.department(), area_id: areasRows[0].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[1].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[2].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[3].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[4].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[5].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[6].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[7].id,createdAt: new Date(),updatedAt: new Date()},
      {name: faker.commerce.department(), area_id: areasRows[8].id,createdAt: new Date(),updatedAt: new Date()},
    ], {});

    const subareas = await queryInterface.sequelize.query(
      `SELECT id from subareas;`
    );

    const subareasRows = subareas[0];


    return await queryInterface.bulkInsert('employees',[
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        document:faker.phone.phoneNumber(),
        type_document:  "DUI" ,
        subarea_id: subareasRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);

  },
  down: async (queryInterface) => {
    //, Sequelize
    await queryInterface.bulkDelete('subareas', null, {});
    await queryInterface.bulkDelete('areas', null, {});
    await queryInterface.bulkDelete('employees', null, {});
  },
};
