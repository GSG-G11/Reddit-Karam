const { connection } = require('../../config')

const addPostQuery = ({title, content, image, user_id}) => {
    const sql = {
        text: `INSERT INTO posts (title, content, image, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [title, content, image, user_id]
    };

    return connection.query(sql);
}

module.exports = addPostQuery;