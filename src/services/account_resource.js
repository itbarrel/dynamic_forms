const storage = require('../utils/cl-storage');

class AccountResourceService {
  constructor(model) {
    this.model = model;
  }

  async all(query = {}, offset = 1, limit = 20) {
    const tenant = storage.get('tenant');
    query.tenantId = tenant.id;

    const options = {
      where: query,
      page: offset,
      paginate: limit,

    };
    return this.model.paginate(options);
  }

  async create(obj = {}) {
    const tenant = storage.get('tenant');
    obj.tenantId = tenant.id;

    return this.model.create(obj);
  }

  async findById(id) {
    return this.model.byId(id);
  }

  async findByQuery(
    query = {},
    single = true,
    attributes = Object.keys(this.model.tableAttributes),
    include = [],
    offset = 0,
    limit = 20,
  ) {
    if (!(attributes instanceof Array)) {
      attributes = Object.keys(this.model.tableAttributes);
    }
    const tenant = storage.get('tenant');
    query.tenantId = tenant.id;

    const fullQuery = {
      where: query, attributes, include, offset, limit,
    };

    return single
      ? this.model.findOne(fullQuery)
      : this.model.findAll(fullQuery);
  }

  async update(obj = {}, query = {}) {
    const tenant = storage.get('tenant');
    query.tenantId = tenant.id;

    const updated = await this.model.update(obj, {
      where: query,
      validate: true,
      sideEffects: true,
      paranoid: true,
      returning: true,
      individualHooks: true,
    });
    if (!updated[1][0]) {
      throw new Error(`${this.model.name} not found.`);
    }
    return updated[1][0];
  }

  async delete(query = {}) {
    const tenant = storage.get('tenant');
    query.tenantId = tenant.id;

    const result = await this.model.destroy({ where: query });
    if (!result) {
      throw new Error(`${this.model.name} not found.`);
    } else {
      return ('Deleted Successfully');
    }
  }
}

module.exports = AccountResourceService;
