const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.post('/user', userController.createUser);
router.get('/user/:userid', userController.getUser);
router.put('/user/:userid', userController.updateUser);
router.delete('/user/:userid', userController.Delete)
router.post('/sign_in', userController.signin)

module.exports = router;