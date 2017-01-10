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
    'cb.x2js',
    'ui.grid',
    'angular-momentjs'
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
      .when('/settings', {
          templateUrl: '/views/settings/settings.html',
          controller: 'settings',
          controllerAs: 'settingsCtrl'
      })
      .when('/settings/hml', {
          templateUrl: '/views/settings/hml/hml-settings.html',
          controller: 'hmlSettings',
          controllerAs: 'hmlSettingsCtrl'
      })
      .when('/settings/fhir', {
          templateUrl: '/views/settings/fhir/fhir-settings.html',
          controller: 'fhirSettings',
          controllerAs: 'fhirSettingsCtrl'
      })
      .when('/settings/miring', {
          templateUrl: '/views/settings/miring/miring-settings.html',
          controller: 'miringSettings',
          controllerAs: 'miringSettingsCtrl'
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