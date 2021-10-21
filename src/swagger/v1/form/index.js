const addform = require('./addform');
const deleteform = require('./deleteform');
const getforms = require('./getforms');
const updateform = require('./updateform');

module.exports = {
  '/v1/forms': {
    get: getforms,
    post: addform,
  },
  '/v1/forms/{id}': {
    put: updateform,
    delete: deleteform,
  },
};
