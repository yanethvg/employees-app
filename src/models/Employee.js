'use strict';

module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    'Employees',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The name must be at least two characters',
          },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The name must be at least two characters',
          },
        },
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The name must be at least two characters',
          },
        },
      },
      type_document: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The name must be at least two characters',
          },
        },
      },
      area_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'employees',
    }
  );

  // employee.associate = function (models) {
  //   // associations can be defined here
  // };

  return employee;
};
