const checkAuth   = require('../middleware/checkAuth');
const { signupController, signinController, addPostController, getPostsController, getSinglePostController, addCommentController, getSinglePostCommentsController, getUserController } = require('../controller');
const logoutController = require('../controller/accounts/logoutController');

const api = require('express').Router();

api.post('/signup', signupController);

api.post('/signin', signinController);

api.get('/check-logged', logoutController);

api.post('/addPost', checkAuth, addPostController);

api.get('/getPosts', getPostsController);

api.get('/:id/singlePost', getSinglePostController);

api.post('/addComment', checkAuth, addCommentController);

api.get('/show/post/:id/comments', getSinglePostCommentsController);

api.get('/show/:id/profile', getUserController);

module.exports = api;