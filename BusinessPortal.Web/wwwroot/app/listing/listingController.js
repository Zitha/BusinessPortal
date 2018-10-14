(function () {
    'use strict';

    function ListingController($location, $scope, $rootScope, $sessionStorage, AppService) {
        $scope.technicians = [];

        function init() {
            for (var i = 0; i < technicians.length; i++) {
                $scope.technicians.push(technicians[i]);
            }
        }
        $scope.navigateTo = function (url,model) {

            AppService.setSelectedTechnician(model);

            $location.path(url);
        };

        $scope.categoryChange = function (option) {
            $scope.technicians = [];
            if (option.singleSelect !== "") {
                for (var i = 0; i < technicians.length; i++) {
                    if (option.singleSelect === technicians[i].type) {
                        $scope.technicians.push(technicians[i]);
                    }
                }
            } else {
                for (var j = 0; j < technicians.length; j++) {
                    $scope.technicians.push(technicians[j]);
                }
            }
        };


        var technicians = AppService.getTechnicians();
        init();
    }

    angular.module('TheApp').controller('ListingController', ListingController);
    ListingController.$inject = ['$location', '$scope', '$rootScope', '$sessionStorage','AppService'];
})();