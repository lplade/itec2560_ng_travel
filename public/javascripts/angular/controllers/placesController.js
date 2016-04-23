var app = angular.module('travelApp'); //get a reference to theapp

//And add the controller; add event handlers
app.controller('placesController', ['$scope', '$http', function ($scope, $http) {
	$scope.loadPlaces = function () {
		$http.get('/places/allPlaces').success(function (data, status, header, config) {
				//Set the data that the server returned to the client's model.
				//because fo data binding, the update will be visible in the HTML page.
				$scope.places = data;
			}
		).error(function (data, status, header, config) {
			console.log('Error fetching all places ' + data);
			$scope.place = [];
		});
	};

	$scope.addNewPlace = function (placeName, newCountry) {
		var newPlace = {
			name: placeName,
			country: newCountry
		};

		$http.post('/places/newPlace', newPlace)
			.success(function (data, status, headers, config) {
				$scope.loadPlaces(); //reload list of places
			})
			.error(function (data, status, headers, config) {
				console.log('error adding new place ' + newPlace;
				)
			})
	};

	$scope.visited = function (placeVistied) {
		console.log('visited function');
		console.log(placeVisted);

		$http.post('/places/visited', {placeid: placeVisied._id})
			.success(function (data, s, h, c) { //blah typing parameters
				$scope.loadPlaces();
			})
			.error(function (d, s, h, c) {
				console.log('error updating ' + placeVisited + d);
			})
	};
}]);