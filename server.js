
/********** Node Modules **************/
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
/********** App setup **************/
var app = express();


/**** App configuration *******/
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, '../app')));

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);