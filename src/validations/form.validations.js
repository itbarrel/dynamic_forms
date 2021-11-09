const Joi = require('joi');

const formObj = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.text(),
        fields: Joi.json(),
        identifier: Joi.string(),
        active: Joi.boolean(),
        status: Joi.boolean(),
    }),
};

module.exports = {
    formObj,
};
