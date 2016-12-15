/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function reportingCenter ($scope, $uibModalInstance) {
        /* jshint validthis: true */
        var reportingCenterCtrl = this;

        reportingCenterCtrl.scope = $scope;

        reportingCenterCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        reportingCenterCtrl.close = function () {
            $uibModalInstance.close();
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenter', reportingCenter);
    reportingCenter.$inject = ['$scope', '$uibModalInstance'];
}());