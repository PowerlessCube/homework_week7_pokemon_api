var Pokedex = require('pokedex-promise-v2');

window.onload = function () {
	var url = "http://pokeapi.co/api/v2/pokemon/";
	var request = new XMLHttpRequest();
	request.open( "GET", url );

	request.onload = function() {
		if ( request.status === 200 ) {
			console.log( "accessData func: Data received" );
			var jsonString = request.responseText;
			result = JSON.parse( jsonString );
			mapObject(result);
			console.log(mapObject);
		}
	};
	request.send( null );
};
