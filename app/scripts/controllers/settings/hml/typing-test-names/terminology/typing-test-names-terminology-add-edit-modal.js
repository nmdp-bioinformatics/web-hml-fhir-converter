/**
 * Created by abrown3 on 1/9/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminologyAddEditModal ($scope, $uibModalInstance, typingTestName, title, edit, typingTestNameService) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyAddEditModalCtrl = this;

        typingTestNamesTerminologyAddEditModalCtrl.scope = $scope;
        typingTestNamesTerminologyAddEditModalCtrl.typingTestName = typingTestName;
        typingTestNamesTerminologyAddEditModalCtrl.title = title;
        typingTestNamesTerminologyAddEditModalCtrl.formSubmitted = false;
        typingTestNamesTerminologyAddEditModalCtrl.edit = edit;

        typingTestNamesTerminologyAddEditModalCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNamesTerminologyAddEditModalCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingTestNamesTerminologyAddEditModalCtrl.save = function () {
            typingTestNamesTerminologyAddEditModalCtrl.formSubmitted = true;

            if (!typingTestNamesTerminologyAddEditModalCtrl.terminologyForm.$invalid) {
                if (typingTestNamesTerminologyAddEditModalCtrl.edit) {

                } else {
                    typingTestNameService.addSingleTypingTestNameTerminology(typingTestNamesTerminologyAddEditModalCtrl.typingTestName).then(function (result) {
                       if (result) {
                           $uibModalInstance.close(typingTestNamesTerminologyAddEditModalCtrl.typingTestName);
                       }
                    });
                }
            }
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminologyAddEditModal', typingTestNamesTerminologyAddEditModal);
    typingTestNamesTerminologyAddEditModal.$inject = ['$scope', '$uibModalInstance', 'typingTestName', 'title', 'edit', 'typingTestNameService'];
}());