var submodule = angular.module('polymer.controllers', [])

  submodule.controller('HomeController', ['$scope' ,function($scope){
  	$scope.title = 'Hello World';
  	$scope.promotions = [
  		{name: 'Coca Cola', price: '$2'},
  		{name: 'Pepsi', price: '$3'},
  		{name: 'Redbull', price: '$4'}
  	];

  	$scope.add = function(){
  		var newpromotion = angular.copy($scope.newpromotion);
  		$scope.promotions.push(newpromotion);
  	};
  }])

  submodule.controller('ProductsController', [function(){

  }]);
  
  submodule.controller('VideosController', ['$scope', function($scope){
    var video = document.querySelector("video");
    
    $scope.play = function(){
      video.play();
    };

    $scope.pause = function(){
      video.pause();
    };

  }]);