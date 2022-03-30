const { signupQuery, checkEmailQuery } = require("./accounts");
const { addPostQuery, getPostsQueryVoteDesc, getSinglePostQuery, addCommentQuery, getSinglePostCommentsQuery } = require("./posts");

module.exports = {
    signupQuery,
    checkEmailQuery,
    addPostQuery,
    getPostsQueryVoteDesc,
    getSinglePostQuery,
    addCommentQuery,
    getSinglePostCommentsQuery,
}
