const express = require('express')
const router = express.Router();
const reviewController = require('../controllers/reviews')

router.post('/reviews', reviewController.createReview)
router.get('/reviews/:id', reviewController.getReview)
router.put('/reviews/:id', reviewController.updateReview)