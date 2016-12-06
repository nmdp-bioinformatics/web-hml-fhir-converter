angular.module('hml-fhir-client', ['ui.router']);
angular.module('hml-fhir-client.controllers', []);

var app = angular.module('hml-fhir-client');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProviders.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'home',
        controllerAs: 'homeCtrl'
    });
}]);