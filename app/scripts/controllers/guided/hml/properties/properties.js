/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function properties ($scope, $uibModalInstance) {
        /* jshint validthis: true */
        var propertiesCtrl = this;

        propertiesCtrl.scope = $scope;

        propertiesCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        propertiesCtrl.close = function () {
            $uibModalInstance.close();
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('properties', properties);
    properties.$inject = ['$scope', '$uibModalInstance'];
}());