const mongoose = require('mongoose');

const foodTruckSchema = new mongoose.Schema(
    {
        location: [{
            locationName: String,
            street: String,
            city: String,
            state: String,
            zipCode: String,
            hours: [{
                day: [{
                    start: Number,
                    end: Number
                }]
            }]
        }],
        cuisine: [{
            type: String,
            enum: [
                "American", "Chinese", "Japanese", "Mediteranean", "Thai", "Indian", "Filipino", "French", "Haitian", "Cuban", "Tex-Mex", "Vietnamese", "Mexican", "Korean", "Soul Food", "Polish", "Ethiopian", "Greek", "Asian-Fusion", "Nigerian"
            ]
        }],
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }],
        currentRating: Number,
        menu: [{
            apps: [{
                dishName: String,
                description: String,
                price: Number
            }],
            entrees: [{
                dishName: String,
                description: String,
                price: Number
            }],
            sides: [{
                dishName: String,
                description: String,
                price: Number
            }],
            drinks: [{
                dishName: String,
                description: String,
                price: Number
            }],
            desserts: [{
                dishName: String,
                description: String,
                price: Number
            }]
        }]
    }
);

foodTruckSchema.pre('save', async function (next) {
    await this.populate('reviews')
    let aggregateRating = this.reviews.reduce((acc, review) => acc + parseInt(review.rating), 0)
    this.currentRating = aggregateRating
    return next();
});

const FoodTrucks = mongoose.model('FoodTrucks', foodTruckSchema);

module.exports = FoodTrucks;