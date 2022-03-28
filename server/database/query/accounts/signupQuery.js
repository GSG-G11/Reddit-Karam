const { connection } = require('../../config')

const signupQuery = ({username, email, password}) => {
    const sql = {
        text:  `INSERT INTO users 
                (username, email, password)
                VALUES ($1, $2, $3) RETURNING id, username, email, image;`,
        values: [username, email, password]
    }

    return connection.query(sql);
}

module.exports = signupQuery;