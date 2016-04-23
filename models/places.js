var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var place = new Schema( {
	name: String,
	country: String,
	visited: { type: Boolean, default: false }
});

var PlaceSchema = mongoose.model('Destination', place);

module.exports = PlaceSchema;