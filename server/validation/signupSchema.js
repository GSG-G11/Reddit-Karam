const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string()
    .min(3)
    .max(50)
    .required(),

    email: Joi.string()
    .email(),

    password: Joi.string()
    .min(4),

    confirmPass: Joi.ref('password')
});

module.exports = signupSchema;