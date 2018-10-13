(function () {
    'use strict';

    function ListingController($location, $scope, $rootScope, $sessionStorage) {
        $scope.technicians = [];
        init();

        function init() {
            $scope.technicians.push({
                name: "Tebogo",
                surname: "Masango",
                rating: 3,
                nationality:"South Africa",
                type: "Plumber",
                imageSrc:"http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-A3-icon.png"
            });
            $scope.technicians.push({
                name: "Thabang",
                surname: "Ncobo",
                rating: 4,
                nationality: "South Africa",
                type: "Painter",
                imageSrc: "http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-H2-icon.png"
            });
            $scope.technicians.push({
                name: "Mandla",
                surname: "Khumalo",
                rating: 5,
                nationality: "South Africa",
                type: "Electrician",
                imageSrc: "https://png.icons8.com/color/50/000000/user.png"
            });
            $scope.technicians.push({
                name: "Martin",
                surname: "Zondo",
                rating: 2,
                nationality: "South Africa",
                type: "Plumber",
                imageSrc: "https://png.icons8.com/doodle/50/000000/user.png"
            });
        }


    }

    angular.module('TheApp').controller('ListingController', ListingController);
    ListingController.$inject = ['$location', '$scope', '$rootScope', '$sessionStorage'];
})();