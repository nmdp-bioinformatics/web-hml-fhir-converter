/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typingAddEdit ($scope, appConfig, $uibModalInstance, hmlModel) {
        /* jshint validthis: true */
        var typingAddEditCtrl = this

        typingAddEditCtrl.scope = $scope;
        typingAddEditCtrl.panelData = appConfig.typingPanels;
        typingAddEditCtrl.formSubmitted = false;
        typingAddEditCtrl.hml = hmlModel;
        typingAddEditCtrl.parentCollectionPropertyAllocation = createPropertyAllocator();
        typingAddEditCtrl.expandedPanels = {
            properties: false,
            alleleAssignmetn: false,
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
                $uibModalInstance.close(typingAddEditCtrl.hml);
            }
        };

        typingAddEditCtrl.togglePanels = function (panelName) {
            typingAddEditCtrl.expandedPanels[panelName] = !typingAddEditCtrl.expandedPanels[panelName];
        };

        function createPropertyAllocator() {
            return [
                {},
                {}
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingAddEdit', typingAddEdit);
    typingAddEdit.$inject = ['$scope', 'appConfig', '$uibModalInstance', 'hmlModel'];
}());