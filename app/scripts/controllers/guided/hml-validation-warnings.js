/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hmlValidationWarnings ($scope, warnings, file, $uibModalInstance) {
        /*jshint validthis: true */
        var hmlValidationWarningsCtrl = this;

        hmlValidationWarningsCtrl.scope = $scope;
        hmlValidationWarningsCtrl.warnings = warnings;

        hmlValidationWarningsCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlValidationWarningsCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlValidationWarningsCtrl.removeFile = function () {
            $uibModalInstance.close(file);
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlValidationWarnings', hmlValidationWarnings);
    hmlValidationWarnings.$inject = ['$scope', 'warnings', 'file', '$uibModalInstance'];
}());
