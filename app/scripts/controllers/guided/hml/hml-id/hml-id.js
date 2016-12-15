/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlId ($scope, $uibModalInstance) {
        /* jshint validthis: true */
        var hmlIdCtrl = this;

        hmlIdCtrl.scope = $scope;

        hmlIdCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlIdCtrl.close = function () {
            $uibModalInstance.close();
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlId', hmlId);
    hmlId.$inject = ['$scope', '$uibModalInstance'];
}());