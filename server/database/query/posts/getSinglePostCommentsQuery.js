const { connection } = require("../../config");

const getSinglePostCommentsQuery = (post_id) => {
    const sql = {
        text: `SELECT 
            c.content, c.date,
            u.id AS user_id, u.username, u.image as user_image
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.post_id = $1
            ORDER BY c.date DESC;`,
        values: [post_id],
    };
    return connection.query(sql);
}

module.exports = getSinglePostCommentsQuery;