/**
 * Created by abrown3 on 1/9/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminologyAddEditModal ($scope, $uibModalInstance, typingTestName) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyAddEditModalCtrl = this;

        typingTestNamesTerminologyAddEditModalCtrl.scope = $scope;
        typingTestNamesTerminologyAddEditModalCtrl.typingTestName = typingTestName;

        typingTestNamesTerminologyAddEditModalCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNamesTerminologyAddEditModalCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingTestNamesTerminologyAddEditModalCtrl.update = function () {
            $uibModalInstance.close(typingTestNamesTerminologyAddEditModalCtrl.typingTestName);
        };
    }

    angular.module('').controller('typingTestNamesTerminologyAddEditModal', typingTestNamesTerminologyAddEditModal);
    typingTestNamesTerminologyAddEditModal.$inject = ['$scope', '$uibModalInstance', 'typingTestName'];
}());