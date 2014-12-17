var stoftiApp = angular.module('stoftiApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'mgcrea.ngStrap'
]);

stoftiApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/partials/home.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "/partials/about.html"
        })
        .state('news', {
            url: "/news",
            templateUrl: "/partials/news.html"
        })
        .state('read', {
            url: "/read?story_id&contrib_id",
            templateUrl: "/partials/read.html",
            controller: "ReadController"
        })
        .state('writenew', {
            url: "/write?new",
            templateUrl: "partials/write.html",
            controller: "WriteController"
        })
        .state('writeedit', {
            url: "/write?story_id&contrib_id",
            templateUrl: "partials/write.html",
            controller: "WriteController"
        })
});