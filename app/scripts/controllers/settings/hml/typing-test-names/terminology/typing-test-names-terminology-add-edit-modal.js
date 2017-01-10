/**
 * Created by abrown3 on 1/9/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminologyAddEditModal ($scope, $uibModalInstance, typingTestName, title) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyAddEditModalCtrl = this;

        typingTestNamesTerminologyAddEditModalCtrl.scope = $scope;
        typingTestNamesTerminologyAddEditModalCtrl.typingTestName = typingTestName;
        typingTestNamesTerminologyAddEditModalCtrl.title = title;
        typingTestNamesTerminologyAddEditModalCtrl.formSubmitted = false;

        typingTestNamesTerminologyAddEditModalCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNamesTerminologyAddEditModalCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingTestNamesTerminologyAddEditModalCtrl.update = function () {
            typingTestNamesTerminologyAddEditModalCtrl.formSubmitted = true;

            $uibModalInstance.close(typingTestNamesTerminologyAddEditModalCtrl.typingTestName);
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminologyAddEditModal', typingTestNamesTerminologyAddEditModal);
    typingTestNamesTerminologyAddEditModal.$inject = ['$scope', '$uibModalInstance', 'typingTestName', 'title'];
}());