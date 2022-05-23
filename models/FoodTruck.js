const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios')

const foodTruckSchema = new Schema (
    {
        foodTruckName: String,
        description: String,
        img: String,
        phone: String,
        location: {
            locationName: String,
            street: String,
            city: String,
            state: String,
            zipCode: String,
            geoLocation: {
                type: {
                    type: String,
                    enum: ['Point'],
                },
                coordinates: {
                    type: [Number]
                },
            },
            hours: [{
                day: [{
                    start: Number,
                    end: Number
                }]
            }]
        },
        cuisine: [{
            type: String,
            enum: [
                "american", "chinese", "japanese", "mediteranean", "thai", "indian", "filipino", "french", "haitian", "cuban", "tex-mex", "vietnamese", "mexican", "korean", "soul food", "polish", "ethiopian", "greek", "asian-fusion", "nigerian, halal, indian, jamaican"
            ]
        }],
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }],
        currentRating: Number,
        priceRating: Number,
        menu: {
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
        }
    }
);

// foodTruckSchema.index({"geoLocation": "2dsphere"})

foodTruckSchema.pre('save', async function (next) {
    if (this.reviews.length > 0) {
        await this.populate('reviews')
        let aggregateRating = this.reviews.reduce((acc, review) => acc + parseInt(review.rating), 0)
        this.currentRating = aggregateRating
    }
    if (this.isModified("location")) {
        const locationStringToSearch = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_MAPS_KEY}&address=${this.location.street}%20${this.location.city}%20${this.location.state}%20${this.location.zipCode}%20USA`.replaceAll(" ", '%20')
        console.log(locationStringToSearch)
        const geoLocation = await axios.get(locationStringToSearch)
        this.location.geoLocation.type="Point"
        this.location.geoLocation.coordinates[0] = geoLocation.data.results[0].geometry.location.lng
        this.location.geoLocation.coordinates[1] = geoLocation.data.results[0].geometry.location.lat
    }
    return next();
});

const FoodTruck = mongoose.model('FoodTruck', foodTruckSchema);

module.exports = FoodTruck;