// server.js

// BASE SETUP
// ==============================================

const express 	= require('express');
const app     	= express();
const port    	= process.env.PORT || 3000;
const bodyParser = require('body-parser');

// ROUTES
// ==============================================

// this will help to load other included files in index.html
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(require('./controllers'));

/*app.use('/views', function(req, res, next) {
  next();
});*/

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
