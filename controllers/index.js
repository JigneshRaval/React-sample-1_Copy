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

/* Get all users
 * @param {path} router path
 * @param {Function} callback - Function to execute once permission is granted
 */
router.get('/users', function(req, res){
	UserModel.getUser(function(users) {
		res.send({users : users});
	});
});

// DELETE USER
router.get('/users/delete/:id', function(req, res){
	UserModel.deleteUser(req.params.id, function(users) {
		res.send({users : users});
	});
});

// GET USER DETAIL FOR SPECific user id
router.get('/users/:id', function(req, res){
	UserModel.viewUserDetail(req.params.id, function(data) {
		// JSON.stringify(data) is used to pass data in user-profile.ntl file because it is templating engine
		// and can not understand direct data
		res.render('user-profile', {message : JSON.stringify(data)});
	});
});

console.log("process.cwd() :", process.cwd());
/* Page Redirection Example
-------------------------------------------
router.get('/user-profile', function(req, res){
	console.log(__dirname, req.params.id);
	//res.sendFile('C:/jr/NodeDev/ES6/React-sample-1_Copy/user-profile.html');
	res.render('user-profile', { title: 'Hey', message: 'Hello there!' })
});
*/

module.exports = router;
