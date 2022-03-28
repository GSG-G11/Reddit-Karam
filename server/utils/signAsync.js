const jwt = require('jsonwebtoken');
require('env2')('.env');

const secret_key = process.env.SECRET_KEY;

const signAsync = (paylod) => {
  return new Promise((resolve, reject) => {
    jwt.sign(paylod, secret_key, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

module.exports = signAsync;