const addCommentController = require("./addCommentController");
const addPostController = require("./addPostController");
const getPostsController = require("./getPostsController");
const getSinglePostCommentsController = require("./getSinglePostCommentsController");
const getSinglePostController = require("./getSinglePostController");

module.exports = {
    addPostController,
    getPostsController,
    getSinglePostController,
    addCommentController,
    getSinglePostCommentsController,
}