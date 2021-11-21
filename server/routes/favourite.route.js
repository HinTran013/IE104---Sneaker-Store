const express = require('express');
const favouriteController = require('../controllers/favourite.controller.js');

const router = express.Router();

router.get('/getfavourite', favouriteController.getFavourites);
router.post('/createfavouritelist', favouriteController.createFavouriteList);
router.post('/addfavourite', favouriteController.addFavourite);

module.exports = router;