/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hmlVersion ($scope, $uibModalInstance, appConfig, currentHmlVersion) {
        /*jshint validthis: true */
        var hmlVersionCtrl = this;

        hmlVersionCtrl.scope = $scope;
        hmlVersionCtrl.versions = appConfig.hml.versions;
        hmlVersionCtrl.defaultHmlVersion = currentHmlVersion;

        hmlVersionCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlVersionCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlVersionCtrl.update = function () {
            $uibModalInstance.close(hmlVersionCtrl.defaultHmlVersion);
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlVersion', hmlVersion);
    hmlVersion.$inject = ['$scope', '$uibModalInstance', 'appConfig', 'currentHmlVersion'];
}());