const FoodTruck = require('../../models/FoodTruck.js');
module.exports = { index, create, show };

// Index Route \\
async function index(req, res) {
    try {
        const foodTrucks = await FoodTruck.find({});
        res.status(200).json(foodTrucks);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Create Route \\
async function create(req, res) {
    try {
        const createdTruck = await FoodTruck.create(req.body);
        res.status(200).json(createdTruck);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Show Route \\
async function show(req, res) {
    try {
        const { foodTruck } = await req.params;
        const foodTrucks = await FoodTruck.find({ foodTruck: foodTruck });
        res.status(200).json(foodTrucks);
    } catch (err) {
        res.status(400).json(err);
    }
};