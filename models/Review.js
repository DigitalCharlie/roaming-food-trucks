const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        foodTruck: [{
            type: Schema.Types.ObjectId,
            ref: 'FoodTruck'
        }],
        rating: Number,
        review: String,
        img: Array
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;