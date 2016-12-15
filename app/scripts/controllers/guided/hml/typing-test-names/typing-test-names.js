/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function typingTestNames ($scope, $uibModalInstance) {
        /* jshint validthis: true */
        var typingTestNamesCtrl = this;

        typingTestNamesCtrl.scope = $scope;

        typingTestNamesCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNamesCtrl.close = function () {
            $uibModalInstance.close();
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNames', typingTestNames);
    typingTestNames.$inject = ['$scope', '$uibModalInstance'];
}());