/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hml ($scope, appConfig, $uibModal, toaster, $location, $q) {
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

        hmlCtrl.addReportingCenter = function () {
            openModal('Add Reporting Center', 'views/guided/hml/reporting-center/reporting-center.html').then(function (result) {
                if (result) {
                    hmlCtrl.hml.reportingCenter = result;
                }
            });
        };

        hmlCtrl.addHmlId = function () {
            openModal('Add HML ID', 'views/guided/hml/hml-id/hml-id.html').then(function (result) {
                if (result) {
                    hmlCtrl.hml.hmlId = result;
                }
            });
        };

        hmlCtrl.addTypingTestNames = function () {
            openModal('Add Typing Test Names', 'views/guided/hml/typing-test-names/typing-test-names.html').then(function (result) {
                if (result) {
                    hmlCtrl.hml.typingTestNames.push(result);
                }
            });
        };

        hmlCtrl.addSamples = function () {
            openModal('Add Samples', 'views/guided/hml/samples/samples.html').then(function (result) {
                if (result) {
                    hmlCtrl.hml.samples.push(result);
                }
            });
        };

        hmlCtrl.addProperties = function () {
            openModal('Add Properties', 'views/guided/hml/properties/properties.html').then(function (result) {
                if (result) {
                    hmlCtrl.hml.properties.push(result);
                }
            });
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
                    id: undefined,
                    rootName: undefined,
                    extension: undefined
                },
                typingTestNames: [],
                samples: [],
                properties: []
            }
        }

        function openModal (title, bodyTemplateUrl) {
            var defer = $q.defer(),
                modalInstance = $uibModal.open({
                    animation: true,
                    controller: 'hmlModal',
                    controllerAs: 'hmlModalCtrl',
                    templateUrl: 'views/guided/hml/hml-modal.html',
                    resolve: {
                        title: function () {
                            return title;
                        },
                        bodyTemplateUrl: function () {
                            return bodyTemplateUrl;
                        },
                        hmlObject: function () {
                            return hmlCtrl.hml;
                        }
                    }
                });

            modalInstance.result.then(function (result) {
                defer.resolve(result);
            });

            return defer.promise;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hml', hml);
    hml.$inject = ['$scope', 'appConfig', '$uibModal', 'toaster', '$location', '$q'];
}());