const storage = require('../utils/cl-storage');

class AccountResourceService {
  constructor(model) {
    this.model = model;
  }

  async all(query = {}, offset = 1, limit = 20) {
    const account = storage.get('account');
    const tenant = storage.get('tenant');

    const toQuery = query;
    toQuery.tenantId = tenant.id;
    toQuery.accountId = account.id;

    const options = {
      where: toQuery,
      page: offset,
      paginate: limit,

    };
    return this.model.paginate(options);
  }

  async create(obj = {}) {
    const account = storage.get('account');
    const tenant = storage.get('tenant');

    const toCreate = obj;
    toCreate.tenantId = tenant.id;
    toCreate.accountId = account.id;

    return this.model.create(toCreate);
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async findByQuery(
    query = {},
    single = true,
    attributes = Object.keys(this.model.tableAttributes),
    include = [],
    offset = 0,
    limit = 20,
  ) {
    const account = storage.get('account');
    const tenant = storage.get('tenant');

    const toQuery = query;
    let toAttributes = attributes;

    if (!(attributes instanceof Array)) {
      toAttributes = Object.keys(this.model.tableAttributes);
    }

    toQuery.tenantId = tenant.id;
    toQuery.accountId = account.id;

    const fullQuery = {
      where: toQuery, attributes: toAttributes, include, offset, limit,
    };

    return single
      ? this.model.findOne(fullQuery)
      : this.model.find(fullQuery);
  }

  async update(obj = {}, query = {}) {
    const account = storage.get('account');
    const tenant = storage.get('tenant');

    const toQuery = query;
    toQuery.tenantId = tenant.id;
    toQuery.accountId = account.id;

    const updated = await this.model.update(obj, {
      where: toQuery,
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
    const toQuery = query;
    const account = storage.get('account');
    const tenant = storage.get('tenant');
    toQuery.tenantId = tenant.id;
    toQuery.accountId = account.id;

    const result = await this.model.destroy({ where: toQuery });
    if (!result) {
      throw new Error(`${this.model.name} not found.`);
    } else {
      return ('Deleted Successfully');
    }
  }
}

module.exports = AccountResourceService;
