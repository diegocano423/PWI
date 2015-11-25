var navigation = angular.module('navigation', ['ngRoute'])

navigation.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/products', {
		templateUrl: 'views/products.html'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);