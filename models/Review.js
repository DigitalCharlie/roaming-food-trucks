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

reviewSchema.pre('save', async function (next) {
    await this.populate('user') && this.populate('foodTruck')
    let aggregateRating = this.reviews.reduce((acc, review) => acc + parseInt(review.rating), 0)
    this.currentRating = aggregateRating
    return next();
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;