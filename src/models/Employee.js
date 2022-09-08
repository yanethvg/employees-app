'use strict';

module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    'Employee',
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
    },
    {
      tableName: 'employees',
    }
  );

  employee.associate = function (models) {
    employee.belongsTo(models.SubArea, { as: 'subareas', foreignKey: 'subarea_id' });
  };

  return employee;
};
