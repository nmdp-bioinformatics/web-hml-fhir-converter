(function () {
    'use strict';

    angular.module('hmlFhir.controllers', []);
    angular.module('hmlFhir.services', []);
    angular.module('hmlFhir.factories', []);

    angular.module('hmlFhir', [])

    .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
            $routeProvider.when('/', {
                url: '/',
                templateUrl: 'views/home/home.html',
                controller: 'home',
                controllerAs: 'homeCtrl'
            }).otherwise({ redirectTo: '/' });
        }]);
}());