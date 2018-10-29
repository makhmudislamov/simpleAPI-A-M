// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
// const venuesRouter = require('./routers/venues');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var events = [
    { "title": "Halloween Party", 
    "date": "October 29, 2025"},
    { "title": "Next Review",
      "date": "November 19, 2020" }
]


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/events)
router.get('/', function (req, res) {
    res.json({ events });
});




// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/events', router); // Forwards any requests to the /albums URI to our albums Router

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);