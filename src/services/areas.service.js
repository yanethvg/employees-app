const boom = require('@hapi/boom');

class AreasService {
  constructor() {
    this.areas = [
      {
        id: 1,
        name: 'Calcetines',
      },
      {
        id: 2,
        name: 'Zapatos',
      },
    ];
    this.cantidad = this.areas.length;
  }

  async find() {
    return this.areas;
  }
  async findOne(id) {
    const area = this.areas.find((area) => area.id == id);
    if (!area) {
      throw boom.notFound('Area not Found');
    }
    return area;
  }
}

module.exports = {
  AreasService,
};
