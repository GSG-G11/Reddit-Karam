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
view.get('/add-post', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'add-post.html'));
});

// Handle Signin && Signup Page
view.get('/sign', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'private', 'sign.html'));
});

module.exports = view;