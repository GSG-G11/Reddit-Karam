const bcrypt = require('bcrypt');
const { checkEmailQuery, signupQuery } = require('../../database');
const { customizseError, signAsync } = require('../../utils');
const { signupSchema } = require('../../validation');

const signupController = (req, res, next) => {
  const { username, email, password, confirmPass } = req.body;
  let id;
  signupSchema
    .validateAsync(
      { username, email, password, confirmPass },
      { abortEarly: false }
    )
    .then(data => {
      return checkEmailQuery(data.email)
    })
    .then(result => {
      if(result.rows.length){
        throw customizseError('Email is Already Exist!', 400)
      } else {
        return bcrypt.hash(password, 10)
      }
    })
    .then(hashedPassword => {
      const user = {
        username,
        email,
        password: hashedPassword,
      }
      return user;
    })
    .then(user => {
      return signupQuery(user);
    })
    .then(result => {
      console.log(result.rows[0]);
      id = result.rows[0].id;
      return signAsync(result.rows[0]);
    })
    .then(token => {
      if (token) {
        res
        .status(200)
        .cookie('token', token, { httpOnly: true })
        .cookie('username', username, { httpOnly: true })
        .cookie('email', email, { httpOnly: true })
        .cookie('id', id, { httpOnly: true })
        .json({msg: 'Signup Successfully!', status: 201});
      } else {
        throw customizseError('Signup Failed! Please Try Again', 500)
      }
    })
    .catch((err) => next(err));
};

module.exports = signupController;
