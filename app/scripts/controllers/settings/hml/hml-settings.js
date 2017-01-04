/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function hmlSettings($scope) {
        /* jshint validthis: true */
        var hmlSettingsCtrl = this;

        hmlSettingsCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlSettings', hmlSettings);
    hmlSettings.$inject = ['$scope'];
}());