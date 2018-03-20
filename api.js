//import express module
require('./data/db_connection.js');
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./router/all_routes.js');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/',routes);

app.use(function(req, res, next){
	console.log(req.method, res.method);
	next();
});

app.get('/public/index.html', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use('/City', express.static(path.join(__dirname, 'City')));

app.get('/City/selection.html', function(req, res){
	res.sendFile(path.join(__dirname,'City', 'selection.html'))
});

app.listen('5800', function(){
	console.log('Running on Node server')
});