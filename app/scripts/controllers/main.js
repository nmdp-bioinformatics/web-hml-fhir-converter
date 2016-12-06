(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hmlFhirAngularClientApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the hmlFhirAngularClientApp
     */

    angular.module('hmlFhirAngularClientApp.controllers').controller('main', main);
    main.$inject = ['$scope', '$modal'];

    function main($scope, $modal) {
        var mainCtrl = this;

        mainCtrl.launchFileConverter = function () {

        };

        mainCtrl.launchGuidedUiConverter = function () {

        };

        mainCtrl.launchSettings = function () {

        };
    }
}());