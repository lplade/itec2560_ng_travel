var express = require('express');
var router = express.Router();

path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  //Send the HTML file that holds our HTML and links to Angular.
	res.sendFile(path.join(__dirname, '../travel_wishlist.html'));

});

module.exports = router;
