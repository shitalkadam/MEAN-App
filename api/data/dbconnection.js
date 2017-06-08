
//we need to get teh client driver for the connection

var MongoClient = require('mongodb').MongoClient;

//connection string
var dburl = 'mongodb://localhost:27017/meanhotel';

//a variable to hold the connection
var _connection = null;

//function to use to open the connection
var open = function() {
    //set connection
    MongoClient.connect(dburl, function(err, db) {
        if(err) {
            console.log("DB connection failed");
            return;
        }
        _connection = db;
        console.log("DB connection open", db);
    });
};

//function to get the connection
var get = function() {
    //get conncetion
    return _connection;
};

module.exports = {
    open : open,
    get : get
};
