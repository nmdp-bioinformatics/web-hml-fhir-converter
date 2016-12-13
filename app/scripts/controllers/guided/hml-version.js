/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hmlVersion ($scope, $uibModalInstance) {
        /*jshint validthis: true */
        var hmlVersionCtrl = this;

        hmlVersionCtrl.scope = $scope;

        hmlVersionCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlVersionCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlVersionCtrl.update = function () {

        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlVersion', hmlVersion);
    hmlVersion.$inject = ['$scope', '$uibModalInstance'];
}());