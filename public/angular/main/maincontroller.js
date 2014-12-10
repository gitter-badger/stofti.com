var stoftiApp = angular.module('stoftiApp');

stoftiApp.controller('MainController', ['$scope', function($scope){
    $scope.greeting = "Hello you crazy kids"
    $scope.pageLocation = "home"
}]);