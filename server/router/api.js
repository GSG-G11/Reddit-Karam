const checkAuth   = require('../middleware/checkAuth');
const { signupController, signinController, addPostController } = require('../controller');
const logoutController = require('../controller/accounts/logoutController');

const api = require('express').Router();

api.post('/signup', signupController);

api.post('/signin', signinController);

api.get('/check-logged', logoutController);

api.post('/addPost', checkAuth, addPostController);

module.exports = api;