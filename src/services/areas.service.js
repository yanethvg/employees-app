const boom = require('@hapi/boom');
const { Area } = require('../models/index');

class AreasService {
  constructor() {
    this.areas =[];
  }

  async find() {
    return await Area.findAll({include: ["subareas"], order: [['id', 'ASC']]});
  }
  async findOne(id) {
    const area = await Area.findByPk(id);
    if (!area) {
      throw boom.notFound('Area not Found');
    }
    return area;
  }
}

module.exports = {
  AreasService,
};
