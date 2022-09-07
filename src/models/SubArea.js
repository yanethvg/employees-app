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
      // area_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    },
    {
      tableName: 'SubAreas',
    }
  );

  subarea.associate = function (models) {
    subarea.belongsTo(models.Area, { as: 'areas', foreignKey: 'area_id' });
  };

  return subarea;
};
