const { connection } = require('../../config')

const signupQuery = ({username, emial, password}) => {
    const sql = {
        text:  `INSERT INTO users 
                (username, email, password)
                VALUES ($1, $2, $3) RETURNING id, username, email image;`,
        values: [username, emial, password]
    }

    return connection.query(sql);
}

module.exports = signupQuery;