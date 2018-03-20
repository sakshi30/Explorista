const mongoose = require('mongoose');
const Place = mongoose.model('Place');

module.exports.getAllDelicacies = function(req, res){
	let placeId = req.params.placeId;
	Place
		.findById(placeId)
		.select('delicacy')
		.exec(function(err, docs){
			res
				.status(200)
				.json(docs.delicacy);
		});

};

module.exports.getOneDelicacy = function(req, res){
	let placeId = req.params.placeId;
	let delicacyId = req.params.delicacyId;
	Place
		.findById(placeId)
		.select('delicacy')
		.exec(function(err, docs){
			let deli = docs.delicacy.id(delicacyId);
			res
				.status(200)
				.json(deli);
		});

};