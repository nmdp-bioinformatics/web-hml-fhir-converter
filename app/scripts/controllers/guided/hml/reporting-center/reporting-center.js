/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function reportingCenter ($scope, guidGenerator) {
        /* jshint validthis: true */
        var reportingCenterCtrl = this,
            parentCtrl = $scope.hmlModalCtrl;

        reportingCenterCtrl.scope = $scope;
        reportingCenterCtrl.formSubmitted = false;
        reportingCenterCtrl.edit = parentCtrl.edit;
        reportingCenterCtrl.reportingCenter = {
            id: guidGenerator.generateRandomGuid(),
            name: undefined,
            context: undefined,
            init: true
        };

        if (reportingCenterCtrl.edit) {
            reportingCenterCtrl.reportingCenter = parentCtrl.hml.reportingCenterCtrl;
        }

        $scope.$on('guided:hml:node:update', function () {
            reportingCenterCtrl.formSubmitted = true;

            if (!reportingCenterCtrl.reportingCenterForm.$invalid) {
                reportingCenterCtrl.formSubmitted = false;
                $scope.$emit('guided:hml:node:updated', reportingCenterCtrl.reportingCenter);
            }
        });
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenter', reportingCenter);
    reportingCenter.$inject = ['$scope', 'guidGenerator'];
}());