// server.js

// BASE SETUP
// ==============================================
const express 	= require('express');
const app     	= express();
const port    	= process.env.PORT || 3000;
const bodyParser = require('body-parser');

/*
 * Create HTTPS server
 * For Creating and using HTTPS server you need to generate SSL Certificates
 * and pass those certificates as options in http.createServer()
 * http://www.hacksparrow.com/node-js-https-ssl-certificate.html
 */
/*
const https 	= require('https');
const fs 		= require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./certs/server/my-server.key.pem'),
  cert: fs.readFileSync('./certs/server/my-server.crt.pem')
};
var host = 'local.helloworld3000.com';
// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443, host);
*/

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
