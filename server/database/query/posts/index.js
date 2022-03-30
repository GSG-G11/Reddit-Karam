const addCommentQuery = require("./addCommentQuery");
const addPostQuery = require("./addPostQuery");
const getPostsQueryVoteDesc = require("./getPostsQueryVoteDesc");
const getSinglePostCommentsQuery = require("./getSinglePostCommentsQuery");
const getSinglePostQuery = require("./getSinglePostQuery");

module.exports = {
    addPostQuery,
    getPostsQueryVoteDesc,
    getSinglePostQuery,
    addCommentQuery,
    getSinglePostCommentsQuery,
}