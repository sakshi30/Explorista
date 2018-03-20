const express = require('express');
const router = express.Router();

const controller_place = require('../controllers/all_places.controllers.js');
const controller_attraction = require('../controllers/all_attractions.controllers.js');
const controller_delicacy = require('../controllers/all_delicacy.controllers.js');
const controller_food = require('../controllers/all_food_places.controllers.js');

router
	.route('/place')
	.get(controller_place.getAllPlaces);

router
	.route('/place/:placeId')
	.get(controller_place.getOnePlace);

router
	.route('/place/:placeId/attractions')
	.get(controller_attraction.getAllAttractions);

router
	.route('/place/:placeId/attractions/:attractionsId')
	.get(controller_attraction.getOneAttraction);

router
	.route('/place/:placeId/delicacy')
	.get(controller_delicacy.getAllDelicacies);

router
	.route('/place/:placeId/delicacy/:delicacyId')
	.get(controller_delicacy.getOneDelicacy);

router
	.route('/place/:placeId/shops')
	.get(controller_food.getAllFoods);

router
	.route('/place/:placeId/shops/:shopId')
	.get(controller_food.getOneFood);

module.exports = router;