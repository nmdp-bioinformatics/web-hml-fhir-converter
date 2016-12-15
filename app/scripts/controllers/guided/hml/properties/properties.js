/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function properties ($scope) {
        /* jshint validthis: true */
        var propertiesCtrl = this;

        propertiesCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('properties', properties);
    properties.$inject = ['$scope'];
}());