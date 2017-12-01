'use strict';

const Product = require('./product');
const Review = require('./review');
const User = require('./user');
const Activity = require('./activity');
const Tagline = require('./tagline');

// Associations.
// Tagline's associations are defined in the tagline.js file.
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, Activity, Tagline, User};
