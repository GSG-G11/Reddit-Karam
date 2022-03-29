const { connection } = require('../../config')

const addPostQuery = ({title, content, post_image, user_id}) => {
    const sql = {
        text: `INSERT INTO posts (title, content, post_image, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [title, content, post_image, user_id]
    };

    return connection.query(sql);
}

module.exports = addPostQuery;