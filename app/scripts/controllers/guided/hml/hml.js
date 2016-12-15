/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hml ($scope, appConfig, $uibModal, toaster, $location) {
        /*jshint validthis: true */
        var hmlCtrl = this;

        hmlCtrl.scope = $scope;
        hmlCtrl.hmlVersion = appConfig.hml.version;
        hmlCtrl.hml = createNewHmlObject();
        hmlCtrl.formSubmitted = false;
        hmlCtrl.panelTitle = undefined;
        hmlCtrl.inputSequence = 1;

        hmlCtrl.changeHmlVersion = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/hml-version.html',
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

        hmlCtrl.createHml = function (form) {
            hmlCtrl.formSubmitted = true;

            if (!form.$invalid) {
                hmlCtrl.formSubmitted = false;
                hmlCtrl.panelTitle = 'Project Name: ' + hmlCtrl.hml.project.name + ', HML Version: ' + hmlCtrl.hml.version;
                hmlCtrl.inputSequence = 2;
            }
        };

        hmlCtrl.cancelHml = function () {
            $location.path('/');
        };

        function createNewHmlObject () {
            return {
                version: hmlCtrl.hmlVersion,
                project: {
                    name: undefined,
                },
                reportingCenter: {
                    id: undefined,
                    name: undefined
                },
                hmlId: {
                    id: undefined
                },
                typingTestNames: [],
                samples: [],
                properties: []
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hml', hml);
    hml.$inject = ['$scope', 'appConfig', '$uibModal', 'toaster', '$location'];
}());