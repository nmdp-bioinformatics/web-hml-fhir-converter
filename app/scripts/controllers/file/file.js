/**
 * Created by abrown3 on 12/6/16.
 */
(function () {
    'use strict';

    angular.module('hmlFhirAngularClientApp.controllers').controller('file', file);
    file.$inject = ['$scope', '$uibModalInstance', 'title'];

    function file ($scope, $uibModalInstance, title) {
        var fileCtrl = this;

        fileCtrl.title = title;

        fileCtrl.close = function () {
            $uibModalInstance.close(true);
        };

        fileCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        fileCtrl.upload = function () {

        };
    }
}());