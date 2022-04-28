const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const fileUpload = require('express-fileupload');
const { join } = require('path');
const { clientError, serverError } = require('../controller');
const router = require('../router');
const cloudinary  = require('cloudinary').v2;

require('env2')('.env');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const invokeMiddelwares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(compression());
    app.use(cookieParser());
    app.use(fileUpload({
        useTempFiles: true,
    }));
    app.use(express.static(join(__dirname, '..', '..', 'public')));

    app.use(router)

    // Errors
    app.use(clientError);
    app.use(serverError);
}


module.exports = invokeMiddelwares;