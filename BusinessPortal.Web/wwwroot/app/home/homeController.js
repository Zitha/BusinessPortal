(function () {
    'use strict';

    function HomeController($location, $scope, $rootScope, $sessionStorage) {
        $scope.role = "James Smith";
        $scope.navigateTo = function (url) {
            $location.path(url);
        };
    }

    angular.module('TheApp').controller('HomeController', HomeController);
    HomeController.$inject = ['$location', '$scope', '$rootScope', '$sessionStorage'];
})();