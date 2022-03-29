const { getPostsQueryVoteDesc } = require("../../database")


const getPostsController = (req, res) => {
    getPostsQueryVoteDesc()
    .then(data => {
        console.log(data.rows);
        res
        .status(200)
        .json({ msg: 'Posts Fetched Successfully!', status: 200, data: data.rows });
    })
}

module.exports = getPostsController;