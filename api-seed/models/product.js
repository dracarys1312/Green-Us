var mongoose = require('mongoose');
var crypto = require('crypto');
var logger = require('../helpers/logger');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

// Define User Schema
var Product = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    amount: Number,
    in_stock: {
        type: Boolean,
    }
});

Product.plugin(CreateUpdatedAt);

module.exports = mongoose.model('Product', Product);
