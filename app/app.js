(function () {
    'use strict';

    angular.module('hmlFhir.controllers', []);
    angular.module('hmlFhir.services', []);
    angular.module('hmlFhir.factories', []);
    angular.module('hmlFhir', []);

    appConfigure.$inject = ['$routeProvider', '$httpProvider'];
    function appConfigure ($routeProvider, $httpProvider) {
        $routeProvider.when('/', {
            url: '/',
            templateUrl: 'views/home/home.html',
            controller: 'home',
            controllerAs: 'homeCtrl'
        }).otherwise({ redirectTo: '/' });
    }

    appRun.$inject = [];
    function appRun () {

    }
}());