const mongoose = require('mongoose');
const Place = mongoose.model('Place');

module.exports.getAllAttractions = function(req, res){
	let placeId = req.params.placeId;
	Place
		.findById(placeId)
		.select('attractions')
		.exec(function(err, docs){
			res
				.status(200)
				.json(docs.attractions);
		});
};
module.exports.getOneAttraction = function(req, res){
	let placeId = req.params.placeId;
	let attractionId = req.params.attractionsId;
	Place
		.findById(placeId)
		.select('attractions')
		.exec(function(err, docs){
			let attraction = docs.attractions.id(attractionId)
			res
				.status(200)
				.json(attraction)
		});
};