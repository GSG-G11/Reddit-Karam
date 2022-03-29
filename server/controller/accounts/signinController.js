const bcrypt = require('bcrypt');
const { checkEmailQuery } = require("../../database");
const { signAsync, customizseError } = require('../../utils');
const { signinSchema } = require("../../validation");

const signinController = (req, res, next) => {
    const { email, password } = req.body;
    const user = {};
    signinSchema.validateAsync({ email, password }, { abortEarly: false })
        .then(data => {
            return checkEmailQuery(data.email)
        })
        .then(result => {
            if (result.rows.length) {
                user.id = result.rows[0].id;
                user.username = result.rows[0].username;
                user.email = result.rows[0].email;
                user.image = result.rows[0].image;
                return bcrypt.compare(password, result.rows[0].password)
            } else {
                throw customizseError('Email or Password is Wrong!', 400)
            }
        })
        .then(result => {
            if (result) {
                return signAsync(user)
            } else {
                throw customizseError('Email or Password is Wrong!', 400)
            }
        })
        .then(token => {
            if (token) {
                res
                    .status(200)
                    .cookie('token', token, { httpOnly: true })
                    .cookie('username', user.username, { httpOnly: true })
                    .cookie('email', user.email, { httpOnly: true })
                    .cookie('id', user.id, { httpOnly: true })
                    .json({ msg: 'Signin Successfully!', status: 201 });
            } else {
                throw customizseError('Signin Failed! Please Try Again', 500)
            }
        })
        .catch((err) => next(err)); 
}

module.exports = signinController;