var stoftiApp = angular.module('stoftiApp', [
    'ngResource',
    'ngSanitize',
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
});