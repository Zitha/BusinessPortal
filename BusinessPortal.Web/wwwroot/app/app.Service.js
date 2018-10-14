(function () {
    'use strict';

    function AppService() {
        var self = this;
        self.selectedTechnician = [];

        this.getTechnicians = function () {
            return self.technicians;
        };

        this.setSelectedTechnician = function (technician) {
            self.selectedTechnician = technician;
        };

        this.getSelectedTechnician = function () {
            return self.selectedTechnician;
        };

        self.technicians = [{
            name: "Tebogo",
            surname: "Masango",
            rating: 3,
            nationality: "South Africa",
            type: "Plumber",
            imageSrc: "http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-A3-icon.png"
        }, {
            name: "Thabang",
            surname: "Ncobo",
            rating: 4,
            nationality: "South Africa",
            type: "Painter",
            rate: "500 - 1000",
            imageSrc: "http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-H2-icon.png",
            summary: "House Painter with years of experience in both interior and exterior paint applied on a variety of surfaces.Perfectionist in my work and ability to guarantee customer satisfaction."
        },
        {
            name: "Mandla",
            surname: "Khumalo",
            rating: 5,
            nationality: "South Africa",
            type: "Electrician",
            imageSrc: "https://png.icons8.com/color/50/000000/user.png"
        }, {
            name: "Martin",
            surname: "Zondo",
            rating: 2,
            nationality: "South Africa",
            type: "Plumber",
            imageSrc: "https://png.icons8.com/doodle/50/000000/user.png"
        }, {
            name: "James",
            surname: "Banda",
            rating: 2,
            nationality: "South Africa",
            type: "Tiler",
            imageSrc: "https://png.icons8.com/doodle/50/000000/user.png"
        }, {
            name: "Owen",
            surname: "Chauke",
            rating: 2,
            nationality: "Zimbabwe",
            type: "Electrician",
            imageSrc: "https://png.icons8.com/doodle/50/000000/user.png"
        }, {
            name: "Thikozani",
            surname: "Nkosi",
            rating: 2,
            nationality: "South Africa",
            type: "Welder",
            imageSrc: "https://png.icons8.com/doodle/50/000000/user.png"
        }, {
            name: "Morena",
            surname: "Masango",
            rating: 3,
            nationality: "South Africa",
            type: "Electrician",
            imageSrc: "http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-A3-icon.png"
        }, {
            name: "Tebogo",
            surname: "Mahlangu",
            rating: 3,
            nationality: "South Africa",
            type: "Plumber",
            imageSrc: "http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-A3-icon.png"
        }];
    }

    angular.module('TheApp').service('AppService', AppService);
    AppService.$inject = [];
})();
