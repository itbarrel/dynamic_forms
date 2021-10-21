const models = require('../models');
const ResourceService = require('./resource');

class FormService extends ResourceService {
  constructor() {
    super(models.Form);
  }
}

module.exports = new FormService();
