var factories = angular.module('proyect.factories', [])

factories.factory('$proyectData', function($http){
	var allGames = [];

	allGames.getAll = function(){
		return $http.get("http://thegamesdb.net/api/GetGamesList.php?name=zelda")
	}

	return allGames
});