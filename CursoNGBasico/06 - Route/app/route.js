(function () {
    "use strict";

    angular.module('app').config(function ($routeProvider) {

        $routeProvider

            .when('/', {
                controller: 'MainController',
                templateUrl: 'pages/main/index.html'
            })

            .when('/about', {
                 controller: 'MainController',
                 templateUrl: 'pages/main/about.html'
            })

            .when('/contact', {
                controller: 'MainController',
                templateUrl: 'pages/main/contact.html'
            })

            .when('/error', {
                controller: 'MainController',
                templateUrl: 'pages/main/error-404.html'
            })

            .otherwise({redirectTo:'/error'});
    });

}());