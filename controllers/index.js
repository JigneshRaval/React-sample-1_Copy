// USER ROUTE
//======================================
const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
const path = require('path');
var fs = require('fs') // this engine requires the fs module
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

router.get('/user-profile', function(req, res){
	console.log(__dirname);
	//res.sendFile('C:/jr/NodeDev/ES6/React-sample-1_Copy/user-profile.html');
	res.render('my-template', { title: 'Hey', message: 'Hello there!' })
});

router.get('/users', function(req, res){
	UserModel.getUser(function(users) {
		res.send({users : users});
	});
});

router.get('/users/delete/:id', function(req, res){
	console.log("express log :", req.params.id);
	UserModel.deleteUser(req.params.id, function(users) {
		res.send({users : users});
	});
});

router.get('/users/:id', function(req, res){
	console.log("express log :", req.params.id);
	UserModel.viewUserDetail(req.params.id, function() {

	});
	res.redirect('/user-profile');
});

module.exports = router;
