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
        review: String
    }
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;