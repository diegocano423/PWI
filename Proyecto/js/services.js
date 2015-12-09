var factories = angular.module('proyect.services', [])

factories.factory('$proyectData', function($http){
	var game;
	var console;

	var getGame = function(){
		var url = 'http://thegamesdb.net/api/GetGame.php?';
		var parameters;

		parameters = {
			url: url,
			method: 'GET',
			name: 'Star Fox 64',
			exactname: 'Star Fox 64',
			id: 4
		}		
	};

	var getConsole = function(){
		var url = 'http://thegamesdb.net/api/GetPlatform.php?';
		var parameters;

		parameters = {
			url: url,
			method: 'GET',
			id: 15
		}
	};


    $http(parameters).then(function(data){
      console.log(data);
      
    }, function(error){
      console.error(error);
    });

    getGame(game);
    getConsole(console);

    return{
    	game: game,
    	console: console
    };
});