const { addCommentQuery } = require("../../database");
const { commentSchema } = require("../../validation");

const addCommentController = (req, res, next) => {
    const { comment, post_id, user_id } = req.body;
    const commentData = {
        comment,
        post_id,
        user_id,
    }
    commentSchema.validateAsync({comment})
    .then((data) => {
        return addCommentQuery(commentData)
    })  
    .then((data) => {
        res
        .status(201)
        .json({msg: 'Comment created successfully!', data: data.rows[0]});
    })
    .catch(err => next(err));
}

module.exports = addCommentController;