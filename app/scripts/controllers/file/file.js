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
        fileCtrl.mode = 1; // this will set it to 'upload' mode.

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
                fileCtrl.mode = 2;
            }
        };
    }
}());