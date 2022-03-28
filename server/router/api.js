const { signupController, signinController } = require('../controller');

const api = require('express').Router();

api.post('/signup', signupController);

api.post('/signin', signinController);

module.exports = api;