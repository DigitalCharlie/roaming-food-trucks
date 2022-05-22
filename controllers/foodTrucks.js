const { isCompositeComponent } = require('react-dom/test-utils');
const FoodTruck = require('../models/FoodTruck.js');
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
        const {cuisine, zipcode} = req.query
        if(zipcode !== 'null' && cuisine !== 'null'){
             truckResult = await FoodTruck.find({cuisine: {$in:[cuisine]}, "location.zipCode": req.query.zipcode })
             console.log('result 1')
        } else if(zipcode !== 'null'){
             truckResult = await FoodTruck.find({"location.zipCode": zipcode })
             console.log('result 2')
        } else if(cuisine !== 'null') {
             truckResult = await FoodTruck.find({cuisine: {$in:[cuisine]}})
             console.log('result 3')
        }
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
        console.log(req.body.lng)
        console.log(req.body.lat)
        const relevantTrucks = await FoodTruck.find({
            "location.geoLocation": { 
                $geoWithin: { $centerSphere: [ [ req.body.lng, req.body.lat ], 10/3963.2 ] } 
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