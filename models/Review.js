const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user: String,
        foodTruck: String,
        rating: Number,
        review: String
    }
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;