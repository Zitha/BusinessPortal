(function () {
    'use strict';

    var app = angular.module('TheApp', ['ngRoute', 'ngStorage']);
    //app.constant('textApi', 'http://localhost:57689/api');
    //app.constant('textApi', 'http://localhost:64653/api');
    //app.constant('textApi', 'http://154.0.170.81:88/api');
    //app.constant('itemType', {
    //    tees: 'Tees',
    //    hoodie: 'Hoodie',
    //    hat: 'Hat'
    //});


    app.run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.currentUrl = $location.path();
        });
    });
})();