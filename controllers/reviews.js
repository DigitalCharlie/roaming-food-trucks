const Review = require('../models/Review')
const FoodTruck = require('../models/FoodTruck')
const User = require('../models/User')

module.exports = {createReview, getReview, updateReview}


async function createReview(req,res){
    try {
        const createdReview = await Review.create(req.body)
        addReviewToFoodTruck(createdReview)
        addReviewToUser(createdReview)
        res.status(200).json(createdReview + ' Successful review creation')
    }
    catch(error){
        res.status(400).json(error + ' Failed to create review.')
    }
}

async function addReviewToFoodTruck (createdReview){
    const reviewedFoodTruck = await FoodTruck.findById(createdReview.foodTruck)
    reviewedFoodTruck.reviews.push(createdReview._id)
    reviewedFoodTruck.save()
}

async function addReviewToUser (createdReview){
    const reviewedUser = await User.findById(createdReview.user)
    reviewedUser.reviews.push(createdReview._id)
    reviewedUser.save()
}


async function getReview(req,res){
    try {
        const reviewList = await Review.findById(req.params.id).populate('Food Truck')
        res.status(200).json(reviewList)
    }
    catch(error){
        res.status(400).json(error + ' Failed to load review.')
    }
}


async function updateReview(req,res){
    try {
        const currentReview = await Review.findByIdUpdate(req.params.id, ...req.body)
        const reviewedFoodTruck = await FoodTruck.findById(currentReview.foodTruck)
        reviewedFoodTruck.save()
        res.status(200).json('Successfully updated')
    }
    catch(error){
        res.status(400).json('Failed to update review')
    }

}