const Joi = require('joi');

const formObj = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        identifier: Joi.string(),
        active: Joi.boolean(),
        status: Joi.boolean(),
    }),
};

module.exports = {
    formObj,
};
