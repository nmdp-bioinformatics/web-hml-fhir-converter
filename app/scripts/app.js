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
    'smart-table',
    'ngMaterial',
    'angularXml2json'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main',
        controllerAs: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about',
        controllerAs: 'aboutCtrl'
      })
      .otherwise({ redirectTo: '/' });
  });