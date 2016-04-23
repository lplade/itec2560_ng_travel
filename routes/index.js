var express = require('express');
var router = express.Router();

path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

	//Send the HTML file
	res.sendFile(path.join(__dirname, '../travel_wishlist.html'));

});

module.exports = router;
