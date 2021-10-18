const Joi = require('joi');

const formTypeObj = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    multiple: Joi.boolean().required(),
    // accountId: Joi.uuid().required(),
  }),
};

module.exports = {
  formTypeObj,
};
