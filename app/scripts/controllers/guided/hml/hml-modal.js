/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlModal ($scope, $uibModalInstance, title, bodyTemplateUrl, hmlObject, templateController) {
        /* jshint validthis: true */
        var hmlModalCtrl = this,
            controllerData = templateController.getControllerNameByTemplateUrl(bodyTemplateUrl);

        hmlModalCtrl.scope = $scope;
        hmlModalCtrl.title = title;
        hmlModalCtrl.hml = hmlObject;
        hmlModalCtrl.bodyTemplateUrl = bodyTemplateUrl;
        hmlModalCtrl.controllerDeclaration = controllerData.controller + ' as ' + controllerData.controllerAs;

        hmlModalCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlModalCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlModalCtrl.update = function () {

        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlModal', hmlModal);
    hmlModal.$inject = ['$scope', '$uibModalInstance', 'title', 'bodyTemplateUrl', 'hmlObject', 'templateController']
}());