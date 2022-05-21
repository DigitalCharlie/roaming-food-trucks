const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')


router.post('/', userController.createUser);
router.get('/:id/favorites', userController.getUserFavorites)
router.get('/user/:userid', userController.getUser);
router.put('/user/:userid', userController.updateUser);
router.delete('/user/:userid', userController.Delete)
router.post('/sign_in', userController.signin)

module.exports = router;