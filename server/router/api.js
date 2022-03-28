const { signupController } = require('../controller');

const api = require('express').Router();

api.post('/signup', signupController);

module.exports = api;