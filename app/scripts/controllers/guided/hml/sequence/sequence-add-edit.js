/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sequenceAddEdit ($scope, $uibModalInstance, sequence, edit, tempId) {
        /* jshint validthis:true */
        var seqeuenceAddEditCtrl = this;

        seqeuenceAddEditCtrl.scope = $scope;
        seqeuenceAddEditCtrl.formSubmitted = false;
        seqeuenceAddEditCtrl.sequence = sequence;
        seqeuenceAddEditCtrl.edit = edit;

        if (!seqeuenceAddEditCtrl.edit) {
            seqeuenceAddEditCtrl.sequence.id = tempId;
        }

        seqeuenceAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        seqeuenceAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        seqeuenceAddEditCtrl.add = function (form) {
            seqeuenceAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                seqeuenceAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(seqeuenceAddEditCtrl.sequence);
            }
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sequenceAddEdit', sequenceAddEdit);
    sequenceAddEdit.$inject = ['$scope', '$uibModalInstance', 'sequence', 'edit', 'tempId'];
}());