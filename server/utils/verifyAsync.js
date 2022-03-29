const jwt = require('jsonwebtoken');
require('env2')('.env');

const secret_key = process.env.SECRET_KEY;

const verifyAsync = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret_key, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}

module.exports = verifyAsync;