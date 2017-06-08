var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require ('../controllers/reviews.controllers.js');
var ctrlUsers = require ('../controllers/users.controllers.js');

//Hotel routes
//get all hotels and post one hotel
router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll)
    .post(ctrlHotels.hotelsAddOne);

//get sigle hotel with hotel id
router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne)
    .put(ctrlHotels.hotelsUpdateOne)
    .delete(ctrlHotels.hotelsDeleteOne);

//Reviews routes
//get all reviews for a particular hotel with hotelId
router
    .route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll)
    .post(ctrlReviews.reviewsAddOne);

//get specific review for a particular hotel with hotelId and reviewId
router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

//Authentication
router
    .route('/users/register')
    .post(ctrlUsers.register);

router
    .route('/users/login')
    .post(ctrlUsers.login);

module.exports = router;


