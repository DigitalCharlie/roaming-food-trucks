const { isCompositeComponent } = require('react-dom/test-utils');
const FoodTruck = require('../models/FoodTruck.js');
const axios = require('axios')

module.exports = { index, create, show, search, zipSearch };

// Index Route \\
async function index(req, res) {
    try {
        const foodTrucks = await FoodTruck.find({});
        res.status(200).json(foodTrucks);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Search Route \\
async function search(req, res){
    try{
        const {zipcode} = req.query
            truckResult = await FoodTruck.find({"location.zipCode": zipcode })
        res.status(200).json(truckResult)
    } catch(err) {
        res.status(400).json(err)
    }
}

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
        const getTruck = await FoodTruck.findById({ _id: req.params.id })
        res.status(200).json(getTruck)
    }
    catch (err) {
        res.status(400).json(err + 'Show Function')
    }
};

async function zipSearch (req,res) {
    try {
        const {zipcode,radius} = req.query
        console.log(zipcode)
        console.log(radius)
        const zipCoordinates = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_MAPS_KEY}&address=${zipcode}`)
        const relevantTrucks = await FoodTruck.find({
            "location.geoLocation": { 
                $geoWithin: { $centerSphere: [ [ zipCoordinates.data.results[0].geometry.location.lng, zipCoordinates.data.results[0].geometry.location.lat ], radius/3963.2 ] } 
                // $near: {
                //     $geometry:  { 
                //         type: "Point",  
                //         coordinates: [req.body.lng, req.body.lat],
                //         $maxDistance: 1000
                //     }   
                // }   
            }
        })
        res.status(200).json(relevantTrucks)
    } catch (err) {
        res.status(400).json(err);
    }
}


// Not Working Show Route \\
// async function show(req, res) {
//     try {
//         const { foodTruck } = await req.params;
//         const foodTrucks = await FoodTruck.findById({ foodTruck: foodTruck });
//         res.status(200).json(foodTrucks);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// };