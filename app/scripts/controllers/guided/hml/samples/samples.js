/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function samples ($scope, $uibModalInstance) {
        /* jshint validthis: true */
        var samplesCtrl = this;

        samplesCtrl.scope = $scope;

        samplesCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        samplesCtrl.close = function () {
            $uibModalInstance.close();
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samples', samples);
    samples.$inject = ['$scope', '$uibModalInstance'];
}());