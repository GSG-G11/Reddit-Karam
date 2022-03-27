const router = require('express').Router();
const api = require('./api');
const view = require("./view");

router.use(view);
router.use('/api/v1', api);

module.exports = router;