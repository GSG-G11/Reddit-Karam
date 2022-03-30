const { getSinglePostCommentsQuery } = require("../../database");

const getSinglePostCommentsController = (req, res) => {
    const postId = req.params.id;

    getSinglePostCommentsQuery(postId)
    .then(data => {
        res
        .status(200)
        .json({
            status: "success",
            data: data.rows,
        });
    })
}

module.exports = getSinglePostCommentsController;