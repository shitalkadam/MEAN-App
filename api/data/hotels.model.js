var mongoose = require('mongoose');


//Nested schemas should be defined before parent schemas.
//Here reviewSchema, and roomSchema are nested schemas
//and hotelschema is parent schema.
var reviewSchema = new mongoose.Schema({
    name : {
        type  : String,
        required : true
    },
    rating : {
        type  : Number,
        min : 0,
        max : 5,
        required : true
    },
    review : {
        type  : String,
        required : true
    },
    createdON : {
        type : Date,
        "default" : Date.now
    }
});

var  roomSchema = new mongoose.Schema({
    type : String,
    number : Number,
    description : String,
    photos : [String],
    price : Number
});

//creating schema will apply some restrictions on the data.
//'required' field is added to the property which cant't be null.
var hotelSchema = new mongoose.Schema({
    name : {
        type  : String,
        required : true
    },
    stars : {
        type : Number,
        min : 0,
        max : 5,
        "default" : 0
    },
    services : [String],
    description : String,
    photos : [String],
    currency : String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
        address : String,
        // Always store coordinates longitude (E/W), latitude (N/s) order.
        coordinates :  {
            type : [Number],
            index : '2dsphere'
        }
    }
});

// We need to define schema first and then create the model
//first parameter can be given any related name like 'Hotel'
//third parameter 'hotels' is the name of collection from database
mongoose.model('Hotel', hotelSchema, 'hotels');


