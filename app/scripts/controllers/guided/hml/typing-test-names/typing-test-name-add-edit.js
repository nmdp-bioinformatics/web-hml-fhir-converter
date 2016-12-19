/**
 * Created by abrown3 on 12/19/16.
 */
(function () {
    'use strict';

    function typingTestNameAddEdit ($scope, $uibModalInstance, typingTestId, edit, typingTestName) {
        /* jshint validthis: true */
        var typingTestNameAddEditCtrl = this;

        typingTestNameAddEditCtrl.scope = $scope;
        typingTestNameAddEditCtrl.formSubmitted = false;
        typingTestNameAddEditCtrl.typingTestName = {
            id: typingTestId,
            name: undefined,
            init: true
        };

        if (edit) {
            typingTestNameAddEditCtrl.typingTestName = typingTestName;
        }

        typingTestNameAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNameAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingTestNameAddEditCtrl.add = function (form) {
            typingTestNameAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                typingTestNameAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(typingTestNameAddEditCtrl.typingTestName);
            }
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNameAddEdit', typingTestNameAddEdit);
    typingTestNameAddEdit.$inject = ['$scope', '$uibModalInstance', 'typingTestId', 'edit', 'typingTestName'];
}());