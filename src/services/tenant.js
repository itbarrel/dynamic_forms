const models = require('../models');
const ResourceService = require('./resource');

class TenantService extends ResourceService {
  constructor() {
    super(models.Tenant);
  }
}

module.exports = new TenantService();
