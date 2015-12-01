var proyect = angular.module('proyect', ['ngRoute', 'proyect.controllers', 'proyect.factories'])

proyect.config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/search', {
		templateUrl: 'views/search.html'
	})
	.when('/results', {
		templateUrl: 'views/results.html'
	})
	.when('/info', {
		templateUrl: 'views/info.html'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);