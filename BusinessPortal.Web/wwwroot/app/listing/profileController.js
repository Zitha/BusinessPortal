(function () {
    'use strict';

    function ProfileController($location, $scope, $rootScope, AppService) {

        $scope.technician = AppService.getSelectedTechnician();
        init();
        
        function init() {

        }
    }

    angular.module('TheApp').controller('ProfileController', ProfileController);
    ProfileController.$inject = ['$location', '$scope', '$rootScope', 'AppService'];
})();