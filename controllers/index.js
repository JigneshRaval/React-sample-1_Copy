const express = require('express');
const router = express.Router();
const UserModel = require('../models/flexi');

// route middleware that will happen on every request
router.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

router.post('/home', function(req, res){
	console.log("TEst :", req.body);
	UserModel.createUser([req.body.userName, req.body.password], function(users) {
		res.send({users : users});
	});
	/*function createUser(userName, callback) {
		console.log("User Created");
		db.users.insert({userName : userName}, function (err, newDocs) {
		  	// Two documents were inserted in the database
		  	// newDocs is an array with these documents, augmented with their _id
			console.log("Insert Error :", err);
			callback(newDocs);
		});
	}*/

});

router.get('/home', function(req, res){
	UserModel.getUser(function(users) {
		res.send({users : users});
	});
});

router.get('/users', function(req, res){

	UserModel.getUser(function(users) {
		res.send({users : users});
	});

});

module.exports = router;
