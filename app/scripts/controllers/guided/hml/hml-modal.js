/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlModal ($scope, $uibModalInstance, title, bodyTemplateUrl) {
        /* jshint validthis: true */
        var hmlModalCtrl = this;

        hmlModalCtrl.scope = $scope;
        hmlModalCtrl.title = title;
        hmlModalCtrl.bodyTemplateUrl = bodyTemplateUrl;

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
    hmlModal.$inject = ['$scope', '$uibModalInstance', 'title', 'bodyTemplateUrl']
}());