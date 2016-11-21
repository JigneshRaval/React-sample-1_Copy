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
app.use(express.static(__dirname));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(require('./controllers'));


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
