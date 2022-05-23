const express = require('express')
const router = express.Router();
const reviewController = require('../controllers/reviews')

router.post('/', reviewController.createReview)
router.get('/:id', reviewController.getReview)
router.put('/:id', reviewController.updateReview)

module.exports = router;