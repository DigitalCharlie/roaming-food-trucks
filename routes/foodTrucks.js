const express = require('express');
const router = express.Router();
const foodTruckCtlrs = require('../controllers/foodTrucks');

router.get('/foodtrucks', foodTruckCtlrs.index);
router.post('/', foodTruckCtlrs.create);
router.get('/:id', foodTruckCtlrs.show);

module.exports = router;