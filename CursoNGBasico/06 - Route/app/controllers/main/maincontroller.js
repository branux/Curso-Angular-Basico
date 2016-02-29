(function () {
    'use strict';

    angular.module("app").controller("MainController", ["$scope", MainController]);

    function MainController($scope) {
        $scope.index = "variável do index";
        $scope.about = "variável do about";
        $scope.contact = "variável do contact";
        $scope.error = "variável do error";
    };

}());