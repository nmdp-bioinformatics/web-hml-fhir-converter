'use strict';

/**
 * @ngdoc overview
 * @name hmlFhirAngularClientApp
 * @description
 * # hmlFhirAngularClientApp
 *
 * Main module of the application.
 */

angular.module('hmlFhirAngularClientApp.controllers', []);
angular.module('hmlFhirAngularClientApp.services', []);
angular.module('hmlFhirAngularClientApp.directives', []);
angular.module('hmlFhirAngularClientApp.factories', []);
angular.module('hmlFhirAngularClientApp.constants', []);

angular.module('hmlFhirAngularClientApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'hmlFhirAngularClientApp.controllers',
    'hmlFhirAngularClientApp.services',
    'hmlFhirAngularClientApp.directives',
    'hmlFhirAngularClientApp.factories',
    'hmlFhirAngularClientApp.constants',
    'ngMaterial',
    'ngAnimate',
    'toaster',
    'cb.x2js'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main',
        controllerAs: 'mainCtrl'
      })
      .when('/guided', {
        templateUrl: '/views/guided/guided-types.html',
        controller: 'guidedTypes',
        controllerAs: 'guidedTypesCtrl'
      })
      .when('/guided/hml', {
        templateUrl: '/views/guided/hml/hml.html',
        controller: 'hml',
        controllerAs: 'hmlCtrl'
      })
      .when('/guided/fhir', {
        templateUrl: '/views/guided/fhir/fhir.html',
        controller: 'fhir',
        controllerAs: 'fhirCtrl'
      })
      .when('/guided/miring', {
        templateUrl: '/views/guided/miring/miring.html',
        controller: 'miring',
        controllerAs: 'miringCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about',
        controllerAs: 'aboutCtrl'
      })
      .otherwise({ redirectTo: '/' });
  });