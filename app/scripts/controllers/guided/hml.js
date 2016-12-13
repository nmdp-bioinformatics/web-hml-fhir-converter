/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hml ($scope, appConfig, $uibModal, toaster) {
        /*jshint validthis: true */
        var hmlCtrl = this;

        hmlCtrl.scope = $scope;
        hmlCtrl.hmlVersion = appConfig.hml.version;

        hmlCtrl.changeHmlVersion = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml-version.html',
                controller: 'hmlVersion',
                controllerAs: 'hmlVersionCtrl',
                resolve: {
                    currentHmlVersion: function () {
                        return hmlCtrl.hmlVersion;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    if (result !== hmlCtrl.hmlVersion) {
                        toaster.pop({
                            type: 'info',
                            body: 'Successfully changed to HML version: ' + result
                        });
                    }

                    hmlCtrl.hmlVersion = result;
                }
            });
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hml', hml);
    hml.$inject = ['$scope', 'appConfig', '$uibModal', 'toaster'];
}());