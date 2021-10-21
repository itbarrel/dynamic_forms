const models = require('../models');
const ResourceService = require('./resource');

class FormTypeService extends ResourceService {
  constructor() {
    super(models.FormType);
  }
}

module.exports = new FormTypeService();
