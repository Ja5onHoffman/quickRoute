var http = require('http');
var rest = require('restler');

var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'user';
var apiKey = 'key';
var origin = 'KIAD';
var destination = 'KORD';


rest.get(fxml_url + 'RoutesBetweenAirports', {
	username: username,
	password: apiKey,
	query: {origin: origin, destination: destination}
}).on('success', function(result, resp) {
	console.log('Filed routes between ' + origin + ' and ' + destination + ':');
	var r = result.RoutesBetweenAirportsResult.data;
	for (var i = 0; i < r.length; i++) {
		console.log('Route: ' + r[i].route + '\n' +
			'Altitude: ' + r[i].filedAltitude);
		};
	})
