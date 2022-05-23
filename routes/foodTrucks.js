const express = require('express');
const router = express.Router();
const foodTruckCtlrs = require('../controllers/foodTrucks');

router.get('/', foodTruckCtlrs.index);
router.post('/', foodTruckCtlrs.create);
router.get('/search', foodTruckCtlrs.search)
router.get('/zipsearch', foodTruckCtlrs.zipSearch);
router.get('/:id', foodTruckCtlrs.show);


module.exports = router;