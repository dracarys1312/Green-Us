var mongoose = require('mongoose');
var crypto = require('crypto');
var logger = require('../helpers/logger');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

// Define Plant Schema
var Plant = new Schema({
    commonname: {
        type: String,
        require: true
    },
    othername: String,
    type: {
        type: String,
        require: true
    },
    difficulty: String,
    time: String,
    instruction: String,
    watering: String,
    sunrequirements: String,
    prunetrain: String,
    propagating: String,
    disease: String,
    meaning: String,
    images: String
});


Plant.plugin(CreateUpdatedAt);

module.exports = mongoose.model('Plant', Plant);

// Do some thing before saving data
Plant.pre('save', function(next) {
    logger.debug('Starting saving plant data');
    next();
});

// Do some thing after saving data
Plant.post('save', function(obj, next) {
    logger.debug('Finished %s', obj._id.toString());
    next();
});
