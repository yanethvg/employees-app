const boom = require('@hapi/boom');
const { Area } = require('../models/index');
const { SubArea } = require('../models/index');
const { Op } = require('sequelize');

class AreasService {
  constructor() {
    this.areas = [];
  }

  async find() {
    return await Area.findAll({
      include: ['subareas'],
      order: [['id', 'ASC']],
    });
  }
  async findOne(id) {
    const area = await Area.findByPk(id);
    if (!area) {
      throw boom.notFound('Area not Found');
    }
    return area;
  }
  async findSubAreas(id) {
    let subareas = SubArea.findAll({
      where: {
        area_id: { [Op.eq]: parseInt(id) },
      },
      order: [['id', 'ASC']],
    });
    if (!subareas) {
      throw boom.notFound('SubAreas not Found');
    }
    return subareas;
  }
}

module.exports = {
  AreasService,
};
