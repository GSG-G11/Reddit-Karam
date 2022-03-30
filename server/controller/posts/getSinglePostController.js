const { getSinglePostQuery } = require("../../database");


const getSinglePostController = (req, res) => {
    const { id } = req.params;
    getSinglePostQuery(id)
    .then(data => {
        res
        .status(200)
        .json({ msg: 'Posts Fetched Successfully!', status: 200, data: data.rows[0] });
    })
}

module.exports = getSinglePostController;