const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true
        },
        favorites: [{ type: Schema.Types.ObjectId, ref: 'FoodTruck' }],
        recents: [{ type: Schema.Types.ObjectId, ref: 'FoodTruck' }]
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;