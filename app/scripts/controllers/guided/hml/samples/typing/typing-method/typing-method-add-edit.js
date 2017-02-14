/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethodAddEdit ($scope, edit, $uibModalInstance, appConfig, typingMethod, hmlModel) {
        /* jshint validthis:true */
        var typingMethodAddEditCtrl = this;

        $scope.parentCtrl = typingMethodAddEditCtrl;

        typingMethodAddEditCtrl.hml = hmlModel;
        typingMethodAddEditCtrl.scope = $scope;
        typingMethodAddEditCtrl.typingMethod = typingMethod;
        typingMethodAddEditCtrl.edit = edit;
        typingMethodAddEditCtrl.panelData = appConfig.typingMethodPanels;
        typingMethodAddEditCtrl.expandedPanels = {
            sso: false,
            ssp: false,
            sbtSanger: false
        };

        typingMethodAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingMethodAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingMethodAddEditCtrl.add = function () {

        };

        typingMethodAddEditCtrl.togglePanel = function (panelName) {
            typingMethodAddEditCtrl.panelData[panelName] = !typingMethodAddEditCtrl.panelData[panelName];
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingMethodAddEdit', typingMethodAddEdit);
    typingMethodAddEdit.$inject = ['$scope', 'edit', '$uibModalInstance', 'appConfig', 'typingMethod', 'hmlModel'];
}());