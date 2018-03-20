const mongoose = require('mongoose');
const Place = mongoose.model('Place');

module.exports.getAllFoods = function(req, res){
	let placeId = req.params.placeId;
	Place
		.findById(placeId)
		.select('shops')
		.exec(function(err, docs){
			res
				.status(200)
				.json(docs.shops)
		});
};

module.exports.getOneFood = function(req, res){
	let placeId = req.params.placeId;
	let foodId = req.params.shopId;
	Place
		.findById(placeId)
		.select('shops')
		.exec(function(err, docs){
			let shop = docs.shops.id(foodId);
			res
				.status(200)
				.json(shop);
		});


};