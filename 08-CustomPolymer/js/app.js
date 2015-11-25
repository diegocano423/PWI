var custom = angular.module('custom', ['ngRoute', 'custom.controllers'])

   custom.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/simpleelement', {
		templateUrl: 'views/simpleelement.html'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);