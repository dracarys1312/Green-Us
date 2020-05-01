var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Plant = require('../models/Plant.js'),
    db = require('../models'),
    logger = require('../helpers/logger');

module.exports = router;

// get a list of Plant
router.get('/list/:page/:limit', function(req, res) {
    var limit = (req.params.limit) ? req.params.limit : 10;
    var skip = (req.params.page) ? limit * (req.params.page - 1) : 0;
    db.Plant
        .find()
        .skip(skip)
        .limit(limit)
        .sort({
            '_id': 'desc'
        })
        .then(function(users) {
            res.send(JSON.stringify(users));
        }).catch(function(e) {
            res.status(500).send(JSON.stringify(e));
        });
});


// get a Plant by id
router.get('/get/:id', function(req, res) {
    logger.debug('Get Plant By Id', req.params.id);
    db.Plant.findOne({
        _id: req.params.id
    }).then(function(Plant) {
        res.send(JSON.stringify(Plant));
    }).catch(function(e) {
        res.status(500).send(JSON.stringify(e));
    });
});

// create a new Plant
router.post('/create', function(req, res, next) {
  Plant.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
