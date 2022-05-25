const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

// /users
router.post('/', userController.createUser);
router.get('/:id/favorites', userController.getUserFavorites)
router.get('/:userid', userController.getUser);
router.put('/:userid/favorite', userController.addNewFavorite);
router.put('/:userid/recent', userController.addNewRecent);
router.delete('/:userid', userController.Delete)
router.post('/signin', userController.signin)

module.exports = router;