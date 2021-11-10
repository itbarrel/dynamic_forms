const Joi = require('joi');

const formObj = {
    body: Joi.object().keys({
        name: Joi.string(),
        description: Joi.string(),
        formTypeId: Joi.string(),
        active: Joi.boolean(),
        status: Joi.boolean(),
    }),
};

module.exports = {
    formObj,
};
