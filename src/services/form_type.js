const models = require('../models')
const FormResourceService = require('./form_resource')

class FormTypeService extends FormResourceService {
  constructor() {
    super(models.FormType);
  }
}

module.exports = new FormTypeService();
