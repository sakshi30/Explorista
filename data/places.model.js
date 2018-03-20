const mongoose = require('mongoose');

let attractionSchema = new mongoose.Schema({
	name:{
		type: String, 
		required : true
	},
	"known for":{
		type: String, 
		required : true
	}, 
	facilities : [String],
	"average time" : String,
	allowed : [String],
	timings : String, 
	"created on":{
		type: Date, 
		default : Date.now
	}
});

let delicacySchema = new mongoose.Schema({
	name:{
		type: String, 
		required : true
	},
	"description" : String
});

let foodstallSchema = new mongoose.Schema({
	name:{
		type: String, 
		required : true
	},
	"loaction" : {
		type: String, 
		required : true
	},
	"known for" : {
		type: String, 
		required : true
	}
});

let placeSchema = new mongoose.Schema({
	"name":{
		type: String, 
		required : true
	}, 
	"famous for":{
		type : String, 
		required: true
	},
	"district":{
		type : String,
		required:true
	},
	"history" : String,
	description : {
		type:String,
		required : true
	},
	"preferred mode of transport" : {
		type:String,
		required : true
	},
	"nearest station" : {
		type:String,
		required : true
	},
	"Tips" : [String],
	"How to reach" : {
		type:String,
		required : true
	},
	"preferred local transport" : [String],
	attractions : [attractionSchema], 
	delicacy : [delicacySchema],
	"important contact numbers" : [String],
	"must buy" : [String],
	"shops" : [foodstallSchema]
});

mongoose.model('Place', placeSchema, 'mumbai_around1');