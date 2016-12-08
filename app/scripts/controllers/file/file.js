/**
 * Created by abrown3 on 12/6/16.
 */
(function () {
    'use strict';

    function file ($scope, $uibModalInstance, title) {
        var fileCtrl = this;

        fileCtrl.scope = $scope;
        fileCtrl.title = title;
        fileCtrl.mode = 1; // this will set it to 'upload' mode.
        fileCtrl.files = [];

        fileCtrl.close = function () {
            $uibModalInstance.close(true);
        };

        fileCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        fileCtrl.instructions = function () {
            if (fileCtrl.mode > 1) {
                fileCtrl.mode = 1;
            } else {
                fileCtrl.mode = 2;  // This sets it to 'instruction' mode.
            }
        };

        $scope.fileInputChange = function (element) {
            fileCtrl.files = element.files;
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('file', file);
    file.$inject = ['$scope', '$uibModalInstance', 'title'];
}());