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
      tableName: 'areas',
    }
  );

  area.associate = function (models) {
    area.hasMany(models.SubArea, { as: 'subareas', foreignKey: 'area_id' });
  };

  return area;
};
