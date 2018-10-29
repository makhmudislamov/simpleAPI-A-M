// const venues = require('express').Router();

// //...

// // Our app.use in the last file forwards a request to our albums router.
// // So this route actually handles `/albums` because it's the root route when a request to /albums is forwarded to our router.
// venues.get('/', function (req, res, next) {
//     // res.send() our response here
// });


// // A route to handle requests to any individual album, identified by an album id
// venues.get('/:venueId', function (req, res, next) {
//     let myVenueId = req.params.venueId;
//     // get album data from server and res.send() a response here
// });

// // Note, this route represents /albums/:albumId/tracks because our top-level router is already forwarding /albums to our Albums router!
// albums.use('/:venue/events', events);

// module.exports = venues;