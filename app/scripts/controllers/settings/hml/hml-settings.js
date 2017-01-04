/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function hmlSettings($scope) {
        /* jshint validthis: true */
        var hmlSettingsCtrl = this;

        hmlSettingsCtrl.scope = $scope;

        hmlSettingsCtrl.launchReportingCenter = function () {

        };

        hmlSettingsCtrl.launchHmlId = function () {

        };

        hmlSettingsCtrl.launchTypingTestNames = function () {

        };

        hmlSettingsCtrl.launchSamples = function () {

        };

        hmlSettingsCtrl.launchProperties = function () {

        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlSettings', hmlSettings);
    hmlSettings.$inject = ['$scope'];
}());