const view = require('express').Router();

view.get('/', (req, res) => {
    res.send('Home Page');
});

module.exports = view;