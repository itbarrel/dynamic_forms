const models = require('../models');
const AccountResourceService = require('./account_resource');

class FormTypeService extends AccountResourceService {
  constructor() {
    super(models.FormType);
  }
}

module.exports = new FormTypeService();
