var factories = angular.module('proyect.factories', [])

factories.factory('$proyectData', function($http){
	var allGames = [],
		allPlatforms = [],
		allGameInfo = [],
		allPlatformInfo = [],
		allPlatformGames = [],
		allArt = [];

	allGames.getGameList = function(){
		return $http.get("http://thegamesdb.net/api/GetGamesList.php?name=zelda");
	}

	return allGames;

	allPlatforms.getPlatformList = function(){
		return $http.get("http://thegamesdb.net/api/GetPlatformsList.php");
	}

	return allPlatforms;

	allGameInfo.getGameInfo = function(){
		return $http.get("http://thegamesdb.net/api/GetGame.php?id=2");
	}

	return allGameInfo;

	allPlatformInfo.getPlatformsInfo = function(){
		return $http.get("http://thegamesdb.net/api/GetPlatform.php?id=15");
	}

	return allPlatformInfo;

	allPlatformGames.getPlatformsGames = function(){
		return $http.get("http://thegamesdb.net/api/PlatformGames.php?platform=microsoft+xbox+360");
	}

	return allPlatformGames;

	allArt.getArt = function(){
		return $http.get("http://thegamesdb.net/api/GetArt.php?id=2");
	}

	return allArt;
});