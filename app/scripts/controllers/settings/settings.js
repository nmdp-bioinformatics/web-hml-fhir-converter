/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function settings ($scope) {
        /* jshint validthis: true */
        var settingsCtrl = this;

        settingsCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('settings', settings);
    settings.$inject = ['$scope'];
}());