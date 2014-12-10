var stoftiApp = angular.module('stoftiApp');

stoftiApp.controller('MainController', ['$scope', '$state', function($scope, $state){
    $scope.userMenu = [
        {
            "text": "Register",
            "href": "/register",
            "target": "_self"
        },
        {
            "text": "Login",
            "href": "/login",
            "target": "_self"
        },
        {
            "text": "Logout",
            "href": "/logout",
            "target": "_self"
        }
    ]
    $scope.$watch(function($state){
        console.log('Watching State', $state)
    }, function(){

    })
}]);