var controllers = angular.module('proyect.controllers', [])

controllers.controller('SearchController', 'games', function($scope, $proyectData){
	$scope.games = [];

	loadGames();

	var loadGames = function(){
		$proyectData.getAll().succes(function(data){
			game  = x2js.xml_str2json(data);
			console.log(games);
			$scope.games = game.gameTitle;
		});
	}
});

controllers.controller('ResultsController', function($scope){

});

controllers.controller('InfoController', function($scope){

});