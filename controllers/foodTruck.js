const FoodTrucks = require('../../models/FoodTruck.js');
module.exports = { create };

// Index Route \\

// Delete Route \\

// Update Route \\

// Create Route \\
async function create(req, res) {
    try {
        const createdTruck = await FoodTrucks.create(req.body);
        res.status(200).json(createdTruck);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Edit Route \\

// Show Route \\