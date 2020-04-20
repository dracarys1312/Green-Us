'use strict';
var express = require('express'),
    router = express.Router();
var bodyParser = require('body-parser');

// body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routers
app.use(require('./apis'));

router.use('/api/v1/users', require('./users'));

// nothing for root
router.get('/', function(req, res){
    res.send(JSON.stringify({}));
});

module.exports = router;
