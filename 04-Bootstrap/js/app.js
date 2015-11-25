var bootstrap = angular.module('bootstrap', ['ngRoute', 'bootstrap.controllers'])

   bootstrap.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/products', {
		templateUrl: 'views/products.html',
		controller: 'ProductsController'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);