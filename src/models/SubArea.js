'use strict';

module.exports = (sequelize, DataTypes) => {
  const subarea = sequelize.define(
    'SubArea',
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
      tableName: 'subareas',
    }
  );

  subarea.associate = function (models) {
    subarea.belongsTo(models.Area, { as: 'areas', foreignKey: 'area_id' });
    subarea.hasMany(models.Employee, { as: 'subareas', foreignKey: 'subarea_id' });
  };

  return subarea;
};
