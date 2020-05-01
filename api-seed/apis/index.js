'use strict';
var express = require('express'),
    router = express.Router();

router.use('/api/v1/users', require('./users'));
router.use('/api/v1/products', require('./products'));
router.use('/api/v1/plants', require('./plants'));

module.exports = router;
