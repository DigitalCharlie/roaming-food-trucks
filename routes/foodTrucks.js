const express = require('express');
const router = express.Router();
const foodTruckCtlrs = require('../../controllers/foodTrucks');

router.get('/', foodTruckCtlrs.index);
router.post('/', foodTruckCtlrs.create);
router.get('/:foodTruck', foodTruckCtlrs.show);

module.exports = router;