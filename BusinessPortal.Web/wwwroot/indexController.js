(function () {
    'use strict';

    function IndexController($location, $scope, $rootScope, $sessionStorage) {

        $scope.isLoggedin = $sessionStorage.isUserAuthenticated;
        $scope.navigateTo = function (url) {
            $location.path(url);
        };
        $scope.role = "James Smith";


        $rootScope.$on('$locationChangeSuccess', routeChanged);
        function routeChanged() {
            if ($location.path() === '/home' || $location.path() === '/') {
                $location.path('/home');
            } 
        }
    }

    angular.module('TheApp').controller('IndexController', IndexController);
    IndexController.$inject = ['$location', '$scope', '$rootScope', '$sessionStorage'];
})();