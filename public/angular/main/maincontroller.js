var stoftiApp = angular.module('stoftiApp');

stoftiApp.controller('MainController', ['$scope', '$state', 'Users', function($scope, $state, Users){
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
    ];
    $scope.genreMenu = [
        {
            "text": "Sci-Fi",
            "href": "/read?id=1"
        },
        {
            "text": "Romance",
            "href": "/read?id=2"
        },
        {
            "text": "Fantasy",
            "href": "/read?id=3"
        },
        {
            "text": "Historical Fiction",
            "href": "/read?id=3"
        },
        {
            "text": "Miscellaneous",
            "href": "/read?id=3"
        }
    ];
    $scope.user = {
        name: "",
        email: "",
        screenname: "",
        author_id: ""
    };
    $scope.getUser = Users.getUser($scope.author_id, function(result){
        $scope.user = result;
    })
}]);