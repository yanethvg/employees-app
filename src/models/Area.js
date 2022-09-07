'use strict';

module.exports = (sequelize, DataTypes) => {
  const area = sequelize.define(
    'Area',
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
    },
    {
      tableName: 'Areas',
    }
  );

  // area.associate = function (models) {
  //   // associations can be defined here
  // };

  return area;
};
