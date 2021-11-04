const models = require('../models');
const AccountResourceService = require('./account_resource');

class FormService extends AccountResourceService {
  constructor() {
    super(models.Form);
  }
}

module.exports = new FormService();
