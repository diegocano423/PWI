var controllers = angular.module('proyect.controllers', ['proyect.factories'])

controllers.controller('searchCtrl', ['$scope', '$location', function($scope, $location){
	$scope.searchGame = function(){
		$location.path('/results/' + $scope.search);
	}

}]);

controllers.controller('ResultsController', ['$scope', '$xmlTojson', 'game', function($scope, $xmlTojson, game){
	$scope.games = JSON.parse(json = $xmlTojson.xml2json($xmlTojson.parseXml(game), '')).Data;
	$scope.currGame = "";
	$scope.imgUrl = function(_url){
		if (Array.isArray(_url.Images.boxart)) {
			return $scope.games.baseImgUrl + _url.Images.boxart[0]['@thumb'];
		} else {
			return $scope.games.baseImgUrl + _url.Images.boxart['@thumb'];
		}
	}

	$scope.modalize = function($event) {
		clickedGame = $event.target.id
		console.log(clickedGame);
		for (var i = 0; i < $scope.games.Game.length; i++) {
			if($scope.games.Game[i].id === clickedGame) {
				$scope.currGame = $scope.games.Game[i];
				console.log("MATCH");
			};
		};
		console.log($scope.currGame);
	};

	console.log($scope.games)
}]);