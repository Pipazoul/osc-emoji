// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var osc = require('node-osc');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/check', function(req, res) {
    res.json({ message: 'OSC-EMOJI IS WORKING' });   
});


router.post('/emoji', function(req, res) {
    emoji = {
        "id": req.body.emojiId,
        "color" : req.body.color
    }
    /*if (err)
        res.send(err);*/

    //res.json("HELLO");
    console.log(emoji);
    res.json(emoji);

    var client = new osc.Client('127.0.0.1', 3333);
    client.send('/emoji' + req.body.emojiId, req.body.emojiId, function () {
    client.kill();
});

});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('OSC-EMOJI IS STARTED ' + port);
