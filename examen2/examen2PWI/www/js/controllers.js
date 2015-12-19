angular.module('starter.controllers', [])

.controller('appController', function appController($scope) {
  $scope.allImgs = [];
  $scope.localImgs = [];
  $scope.currImg = "img/ionic.png";
  $scope.currDate = "";
  $scope.currName = "";
  $scope.takePhoto = function(){
    navigator.camera.getPicture(function(uri){
      $scope.currImg = uri;
      var patt = /cache\/(.*)/;
      var res = patt.exec($scope.currImg);
    $scope.currName = res[1];
      var newDate = new Date();
    $scope.currDate = newDate.toString();
      $scope.$apply();
    }, function(error){
      console.error(error);
    },
    {
      quality: 25
    }
    );
  };
  $scope.save = function() {
    $scope.allImgs.push({name: $scope.currName, date: $scope.currDate, url: $scope.currImg});
    localStorage["imgs"] = JSON.stringify($scope.allImgs);
    $scope.allImgs = JSON.parse(localStorage["imgs"]);
  }
})



