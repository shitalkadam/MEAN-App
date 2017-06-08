
//this used for the native mongodb driver
//require('./api/data/dbconnection.js').open();

//instead native mongodb driver we are now using mongoose
require('./api/data/db.js')

var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./api/routes');

app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.mthod, req.url);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;

    console.log('Magic happens on port ' + port);
});


/// "https://code.angularjs.org/1.4.0/angular.min.js"

//.gitignore node_modules