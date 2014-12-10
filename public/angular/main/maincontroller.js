var stoftiApp = angular.module('stoftiApp');

stoftiApp.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.greeting = "Hello you crazy kids";
    $scope.pageLocation = "home"
}]);