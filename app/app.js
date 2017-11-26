var dogsApp = angular.module("dogsApp", ["ngRoute"]);

dogsApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/gallery", {
        templateUrl: "app/gallery/gallery.html",
        controller: "galleryCtrl"
    })
    .when("/cars/:index", {
        templateUrl: "app/details/carDetails.html",
        controller: "carDetailsCtrl"        
    })
    .when("/maintenance", {
        templateUrl: "app/maintenance/maintenance.html"    
    })    



 })


