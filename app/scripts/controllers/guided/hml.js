/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hml ($scope, appConfig, $uibModal) {
        /*jshint validthis: true */
        var hmlCtrl = this;

        hmlCtrl.scope = $scope;
        hmlCtrl.hmlVersion = appConfig.hml.version;

        hmlCtrl.changeHmlVersion = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml-version.html',
                controller: 'hmlVersion',
                controllerAs: 'hmlVersionCtrl'
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            });
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hml', hml);
    hml.$inject = ['$scope', 'appConfig', '$uibModal'];
}());