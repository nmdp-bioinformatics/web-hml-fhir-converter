/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function reportingCenter ($scope) {
        /* jshint validthis: true */
        var reportingCenterCtrl = this;

        reportingCenterCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenter', reportingCenter);
    reportingCenter.$inject = ['$scope'];
}());