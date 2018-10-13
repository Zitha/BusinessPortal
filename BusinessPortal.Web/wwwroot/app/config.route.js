(function () {
    'use strict';
    var routeProvider = function ($routeProvider, $locationProvider) {

        var viewBase = '/app/';
        $routeProvider.when('/index', {
            controller: 'HomeController',
            templateUrl: viewBase + '/home/home.html',
        }).when('/listing', {
            controller: 'ListingController',
            templateUrl: viewBase + '/listing/listing.html',
        }).otherwise({ redirectTo: '/index' });
    };
    angular.module('TheApp').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];

})();