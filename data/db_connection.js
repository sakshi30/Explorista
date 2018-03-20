const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/explore1';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
	console.log(`Mongoose connected to  ${dburl}`);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err){
	console.log(`Mongoose disconnected ${err}`);
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected through app");
		process.exit(0);
	});
});

// Bring in schemas and models
require('./places.model.js');