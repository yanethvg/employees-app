'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../../config/auth');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Zoila',
          last_name: 'Villatoro',
          email: 'admin@admin.app',
          password: bcrypt.hashSync('secret123', +authConfig.rounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dayana',
          last_name: 'Brizuela',
          email: 'subadmin@gmail.com',
          password: bcrypt.hashSync('cuenta123', +authConfig.rounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
