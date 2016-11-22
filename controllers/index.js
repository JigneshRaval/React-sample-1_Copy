const express = require('express');
const router = express.Router();
const UserModel = require('../models/flexi');

// route middleware that will happen on every request
router.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

router.post('/home', function(req, res){
	UserModel.createUser([req.body.userName, req.body.password], function(user) {
		console.log("Home Router");

		res.json({user : user});
	});
});

router.get('/users', function(req, res){
	UserModel.getUser(function(users) {
		res.send({users : users});
	});
});

module.exports = router;
