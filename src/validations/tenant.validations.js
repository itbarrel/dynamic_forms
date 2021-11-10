const Joi = require('joi');

const tenantObj = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        active: Joi.boolean(),
        status: Joi.boolean(),
    }),
};

module.exports = {
    tenantObj,
};
