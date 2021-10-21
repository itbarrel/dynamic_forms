const Joi = require('joi');

const accountObj = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    active: Joi.boolean(),
    status: Joi.boolean(),
  }),
};

module.exports = {
  accountObj,
};
