/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function propertiesAddEdit ($scope, $uibModalInstance, property, edit) {
        /* jshint validthis: true */
        var propertiesAddEditCtrl = this;

        propertiesAddEditCtrl.scope = $scope;
        propertiesAddEditCtrl.formSubmitted = false;
        propertiesAddEditCtrl.property = property;
        propertiesAddEditCtrl.edit = edit;

        propertiesAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        propertiesAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        propertiesAddEditCtrl.add = function (form) {
            propertiesAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                propertiesAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(propertiesAddEditCtrl.property);
            }
        };

    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('propertiesAddEdit', propertiesAddEdit);
    propertiesAddEdit.$inject = ['$scope', '$uibModalInstance', 'property', 'edit'];
}());