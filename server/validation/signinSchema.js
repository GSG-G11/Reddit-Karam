const Joi = require("joi");


const signinSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(4)
        .required()
});

module.exports = signinSchema;