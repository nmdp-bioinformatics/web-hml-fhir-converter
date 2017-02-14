/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethodAddEdit ($scope, edit, $uibModalInstance, appConfig) {
        /* jshint validthis:true */
        var typingMethodAddEditCtrl = this,
            parentCtrl = $scope.parentCtrl;

        $scope.parentCtrl = typingMethodAddEditCtrl;

        typingMethodAddEditCtrl.hml = parentCtrl.hml;
        typingMethodAddEditCtrl.scope = $scope;
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
    typingMethodAddEdit.$inject = ['$scope', 'edit', '$uibModalInstance', 'appConfig'];
}());