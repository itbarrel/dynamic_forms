const Joi = require('joi');

const formObj = {
    body: Joi.object().keys({
        name: Joi.string(),
        description: Joi.string(),
        fields: Joi.object(),
        formTypeId: Joi.string(),
        active: Joi.boolean(),
        status: Joi.boolean(),
    }),
};

module.exports = {
    formObj,
};
