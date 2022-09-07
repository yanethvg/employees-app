require('dotenv').config();
const { pg } = require('pg');

module.exports = {
  // Configuracion of DB
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectModule: pg,

  // Configuration seeds
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // Configuration migrations
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',
};
