const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string()
    .alphanum()
    .min(3)
    .max(35)
    .required(),

    emial: Joi.string()
    .email(),

    password: Joi.string()
    .alphanum(),

    confirmPass: Joi.ref('password')
});

module.exports = signupSchema;