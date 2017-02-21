/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typingAddEdit ($scope, appConfig, $uibModalInstance, typing, hmlModel, parentCollectionPropertyAllocation, usSpinnerService) {
        /* jshint validthis: true */
        var typingAddEditCtrl = this;

        $scope.parentCtrl = typingAddEditCtrl;
        usSpinnerService.stop('index-spinner');

        typingAddEditCtrl.hml = hmlModel;
        typingAddEditCtrl.scope = $scope;
        typingAddEditCtrl.panelData = appConfig.typingPanels;
        typingAddEditCtrl.formSubmitted = false;
        typingAddEditCtrl.parentCollectionPropertyAllocation = parentCollectionPropertyAllocation;
        typingAddEditCtrl.typing = typing;
        typingAddEditCtrl.expandedPanels = {
            properties: false,
            alleleAssignment: false,
            typingMethod: false,
            consensusSequence: false
        };

        typingAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingAddEditCtrl.add = function (form) {
            typingAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                typingAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(typingAddEditCtrl.typing);
            }
        };

        typingAddEditCtrl.togglePanel = function (panelName) {
            typingAddEditCtrl.expandedPanels[panelName] = !typingAddEditCtrl.expandedPanels[panelName];
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingAddEdit', typingAddEdit);
    typingAddEdit.$inject = ['$scope', 'appConfig', '$uibModalInstance', 'typing', 'hmlModel', 'parentCollectionPropertyAllocation', 'usSpinnerService'];
}());