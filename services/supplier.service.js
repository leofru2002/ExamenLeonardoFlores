const boom = require('@hapi/boom');

class CategoryService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    throw boom.boomify(new Error('Multiple Choices'), { statusCode: 300 });
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
