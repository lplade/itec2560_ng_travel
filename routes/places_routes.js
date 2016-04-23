var express = require('express');
var router = express.Router();

//Routes that the Angular client code will call
//to get a list of places, add a new place, update a place as visited

var Place = require('../models/places');

router.post('/newPlace', function(req, res, next){

	console.log('new place creation, req.body is...');
	console.log(req.body);

	var newPlace = new Place(req.body); //todo validation
	newPlace.save(function(err, place){
		if (err) {
			console.log("error! " + err);
      return next(err)
		}
		console.log('new place: ' + place );

		res.json(place);

    //you may need to send the newly created Place back.
    //Maybe the client needs the _id value, or some other data
    //your server created.
    //if not, then
		//res.sendStatus(200);
    //will also tell the client that it was saved successfully.
	})
});

router.post('/visited', function(req, res, next){

  Place.findByIdAndUpdate( req.body.placeid, { visited : true }, function(err, place){
		if (err) {
			return next(err);
		}
		//If a place with this _id is not found, findByIdAndUpdate will return null
		else if (place == null) {
			console.log('this place was not found');

      //return res.status.... because this is an async method call.
			//If the return is omitted, this method will keep processing
			//and run the res.json(place) line, which will fail because
      //you can't return two things from one request.
			return res.status(404).json({msg: 'Place ID not found'});
		}
    res.json(place);   //return the updated place

	});
});


router.get('/allPlaces', function(req, res, next){

	Place.find().exec(function(err, places){
		if (err) {
			return next(err);
		}
		else if (places == null){
			places = []
		}
		res.json(places);
	})
});


module.exports = router;


