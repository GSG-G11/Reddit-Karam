const { signupController, signinController } = require("./accounts");
const { clientError, serverError } = require("./errors");
const { addPostController, getPostsController } = require("./posts");


module.exports = {
    signupController,
    clientError,
    serverError,
    signinController,
    addPostController,
    getPostsController,
}
