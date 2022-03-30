const { signupQuery, checkEmailQuery, getUserQuery } = require("./accounts");
const { addPostQuery, getPostsQueryVoteDesc, getSinglePostQuery, addCommentQuery, getSinglePostCommentsQuery } = require("./posts");

module.exports = {
    signupQuery,
    checkEmailQuery,
    addPostQuery,
    getPostsQueryVoteDesc,
    getSinglePostQuery,
    addCommentQuery,
    getSinglePostCommentsQuery,
    getUserQuery,
}
