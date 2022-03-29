const { signupQuery, checkEmailQuery } = require("./accounts");
const { addPostQuery, getPostsQueryVoteDesc } = require("./posts");

module.exports = {
    signupQuery,
    checkEmailQuery,
    addPostQuery,
    getPostsQueryVoteDesc,
}
