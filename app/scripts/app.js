'use strict';

/**
 * @ngdoc overview
 * @name hmlFhirAngularClientApp
 * @description
 * # hmlFhirAngularClientApp
 *
 * Main module of the application.
 */
angular
  .module('hmlFhirAngularClientApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
