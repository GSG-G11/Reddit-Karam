const checkAuth   = require('../middleware/checkAuth');
const { signupController, signinController, addPostController, getPostsController } = require('../controller');
const logoutController = require('../controller/accounts/logoutController');

const api = require('express').Router();

api.post('/signup', signupController);

api.post('/signin', signinController);

api.get('/check-logged', logoutController);

api.post('/addPost', checkAuth, addPostController);

api.get('/getPosts', getPostsController);

module.exports = api;