var dogsApp = angular.module("dogsApp", ["ngRoute"]);

dogsApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
 })


