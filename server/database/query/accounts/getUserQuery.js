const { connection } = require('../../config');

const getUserQuery = (user_id) => {
    const sql = {
        text: `SELECT username, email, image FROM users WHERE id = $1`,
        values: [user_id]
    };

    return connection.query(sql);
}

module.exports = getUserQuery;