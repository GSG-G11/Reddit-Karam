const { join } = require('path');

const serverError = (err, req, res, next) => {
    if (err.status) {
        res
        .status(err.status)
        .json({ msg: err.message, status: err.status });
    } else if(err.name === 'ValidationError'){
        res
        .status(400)
        .json({msg: 'ValidationError', err: err});
    } else {
        res
        .status(500)
        .sendFile(join(__dirname, '..', '..', '..', 'private', '500.html'))
    }
}

module.exports = serverError;