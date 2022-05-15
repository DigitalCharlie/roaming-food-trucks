const Reviews = require('../models/review')
const FoodTruck = require('../models/foodtruck')


module.exports = {createReview, getReview, updateReview}


async function createReview(req,res){
    try {
        const createdReview = await Reviews.create(req.body)
        addReviewToUser(createdReview)
        res.status(200).json(createdReview + ' Successful review creation')
    }
    catch(error){
        res.status(400).json(error + ' Failed to create review.')
    }
}

async function addReviewToUser (createdReview){
    const reviewedFoodTruck = await FoodTruck.findById(createdReview.foodTruck)
    reviewedFoodTruck.reviews.push(createdReview._id)
    reviewedFoodTruck.save()
}


async function getReview(req,res){
    try {
        const reviewList = await Reviews.findById(req.params.id).populate('Food Truck')
        res.status(200).json(reviewList)
    }
    catch(error){
        res.status(400).json(error + ' Failed to load review.')
    }
}


async function updateReview(req,res){
    try {
        const currentReview = await Reviews.findByIdUpdate(req.params.id, ...req.body)
        const reviewedFoodTruck = await FoodTruck.findById(currentReview.foodTruck)
        reviewedFoodTruck.save()
        res.status(200).json('Successfully updated')
    }
    catch(error){
        res.status(400).json('Failed to update review')
    }

}