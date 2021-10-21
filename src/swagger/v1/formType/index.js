const getFormType = require('./getFormType');
const postFormType = require('./addFormType');
const updateFormType = require('./updateFormType');
const deleteFormType = require('./deleteFormType');

module.exports = {
  '/v1/form_types': {
    get: getFormType,
    post: postFormType,
  },
  '/v1/form_types/{id}': {
    put: updateFormType,
    delete: deleteFormType,
  },
};
