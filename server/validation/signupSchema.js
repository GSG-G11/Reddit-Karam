const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string()
    .min(3)
    .max(35)
    .required(),

    email: Joi.string()
    .email(),

    password: Joi.string()
    .alphanum()
    .min(4),

    confirmPass: Joi.ref('password')
});

module.exports = signupSchema;