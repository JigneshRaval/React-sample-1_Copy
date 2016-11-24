// USER ROUTE
//======================================
const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');

// route middleware that will happen on every request
router.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

router.post('/addUser', function(req, res){
	UserModel.createUser([req.body.userName, req.body.password], function(user) {
		//res.set({'Content-Type': 'application/json'});
		//res.type('application/json');   // => 'application/json'
		res.send({user : user});
	});
});

router.get('/users', function(req, res){
	UserModel.getUser(function(users) {
		res.send({users : users});
	});
});

router.get('/users/:id', function(req, res){
	console.log("express log :", req.params.id);
	UserModel.deleteUser(req.params.id, function(users) {
		res.send({users : users});
	});
});

module.exports = router;
