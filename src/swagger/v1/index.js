const account = require('./accounts');
const form = require('./form');
const formType = require('./formType');

module.exports = {
  ...account,
  ...formType,
  ...form,

};
