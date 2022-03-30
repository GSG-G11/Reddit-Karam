const checkAuth   = require('../middleware/checkAuth');
const { join } = require('path');

const view = require('express').Router();

// Handle Home Page
view.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'index.html'));
});

// Handle Profile Page
view.get('/show/:id/user', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'profile.html'));
});

view.get('/show/my-profile', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'profile.html'));
})

// Handle Add Post Page
view.get('/add-post', checkAuth, (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'add-post.html'));
});

view.get('/show/:id/single-post', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'single-post.html'));
})

// Handle Signin && Signup Page
view.get('/sign', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'sign.html'));
});

// Handle Logout Page
view.get('/logout', (req, res) => {
    const { token, id, username, email } = req.cookies;
    res
    .status(200)
    .clearCookie('token')
    .clearCookie('id')
    .clearCookie('username')
    .clearCookie('email')
    .redirect('/');
});

module.exports = view;