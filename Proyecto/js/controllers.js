var controllers = angular.module('proyect.controllers', ['proyect.services'])

controllers.controller('SearchController', 'gameList', 'platformList', 'gameInfo', 'platformInfo', 'platformGames', 'art', function($scope, $proyectData){
	$scope.gameList = [];
	$scope.platformList = [];
	$scope.gameInfo = [];
	$scope.platformInfo = [];
	$scope.platformGames = [];
	$scope.art = [];
	$scope.game = $proyectData.game;

	var loadGameList = function(){
		$proyectData.getGameList().then(function(data){
			gameList = x2js.xml_str2json(data);
			$scope.gameList = gameList.gameTitle;
		}, function(error){

		});
	}

	var loadPlatformList = function(){
		$proyectData.getPlatformList().then(function(data){
			platformList = xml_str2json(data);
			$scope.platformList = platformList.platformName;
		}, function(error){

		});
	}

	var loadGameInfo = function(){
		$proyectData.getGame().then(function(data){
			gameInfo = xml_str2json(data);
			$scope.gameInfo = gameInfo.gameTitle;
		}, function(error){
	
		});
	}

	var loadPlatformInfo = function(){
		$proyectData.getPlatformInfo().then(function(data){
			platformInfo = xml_str2json(data);
			$scope.platformInfo = platformInfo.platformName;
		}, function(error){

		});
	}

	var loadPlatformGames = function(){
		$proyectData.getPlatformGames().then(function(data){
			platformGames = xml_str2json(data);
			$scope.platformGames = platformGames.gameTitle;
		}, function(error){

		});
	}

	var loadArt = function(){
		$proyectData.getArt().then(function(data){
			art = xml_str2json(data);
			$scope.art = art.Images;
		}, function(error){

		});
	}

	var searchMatches = function(){
		loadGameList();
		loadPlatformList();
		loadGameInfo();
		loadPlatformInfo();
		loadPlatformGames();
		loadArt();
	}
});

controllers.controller('ResultsController', function($scope){

});

controllers.controller('InfoController', function($scope){

});