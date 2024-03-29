const Joi = require('joi');

const formTypeObj = {
  body: Joi.object().keys({
    name: Joi.string(),
    multiple: Joi.boolean().required(),
    description: Joi.string(),
    active: Joi.boolean(),
    status: Joi.boolean(),
  }),
};

module.exports = {
  formTypeObj,
};
