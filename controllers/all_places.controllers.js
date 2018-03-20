const mongoose = require('mongoose');
const Place = mongoose.model('Place');

module.exports.getAllPlaces = function(req, res){
	let offset = 0;
	let count = 4;
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset , 10);
	}

	if(req.query && req.query.count){
		count = parseInt(req.query.count , 10);
	}

	Place
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err, places){
			console.log("Found places", places.length);
			res
				.json(places)
				.pretty();
		});
};

module.exports.getOnePlace = function(req, res){
	let placeId = req.params.placeId;
	Place
		.findById(placeId)
		.exec(function(err, doc){
			res
				.status(200)
				.json(doc)
		});
};