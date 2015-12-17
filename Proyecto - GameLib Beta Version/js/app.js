var proyect = angular.module('proyect', ['ngRoute', 'proyect.controllers', 'proyect.factories'])

proyect.config(['$routeProvider', function($routeProvider, $proyectDataProvider){
	$routeProvider

	.when('/results/:game', {
		templateUrl: 'views/results.html',
		controller: 'ResultsController',
		resolve: {
			game: function($proyectData, $route){
				return $proyectData.getGame($route.current.params.game);
			}
		}
	})
	.when('/info', {
		templateUrl: 'views/info.html'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);