const models = require('../models');
const FormResourceService = require('./form_resource');

class FormService extends FormResourceService {
  constructor() {
    super(models.Form);
  }
}

module.exports = new FormService();
