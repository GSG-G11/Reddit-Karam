const Joi = require('joi');

const addPostSchema = Joi.object({
    title: Joi.string()
    .required(),

    content: Joi.string()
    .allow('')
    .optional()
});

module.exports = addPostSchema;;