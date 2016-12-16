/**
 * Created by abrown3 on 12/16/16.
 */
(function () {
    'use strict';

    function dynamicController () {
        return {
            restrict: 'EA',
            scope: {
                controller: '=',
                controlleras: '=',
                templateurl: '='
            },
            templateUrl: function (scope) {
                return scope.attributes.templateurl;
            },
            controller: function (scope) {
                return scope.attributes.controller;
            },
            controllerAs: function (scope) {
                return scope.attributes.controlleras;
            }
        };
    }

    angular.module('hmlFhirAngularClientApp.directives').directive('dynamicController', dynamicController);
    dynamicController.$inject = ['$compile', '$parse'];
}());