const { signupController, signinController } = require("./accounts");
const { clientError, serverError } = require("./errors");
const { addPostController, getPostsController, getSinglePostController, addCommentController, getSinglePostCommentsController } = require("./posts");


module.exports = {
    signupController,
    clientError,
    serverError,
    signinController,
    addPostController,
    getPostsController,
    getSinglePostController,
    addCommentController,
    getSinglePostCommentsController,
}