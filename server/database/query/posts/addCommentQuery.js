const { connection } = require("../../config");

const addCommentQuery = ({ comment, post_id, user_id }) => {
    const sql = {
        text: `INSERT INTO 
        comments 
        (content, post_id, user_id) 
        VALUES ($1, $2, $3) RETURNING *`,
        values: [comment, post_id, user_id],
    };

    return connection.query(sql);
}

module.exports = addCommentQuery; 