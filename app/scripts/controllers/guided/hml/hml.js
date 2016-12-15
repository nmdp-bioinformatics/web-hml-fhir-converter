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
            openModal().then(function (result) {

            });
        };

        hmlCtrl.addHmlId = function () {
            openModal().then(function (result) {

            });
        };

        hmlCtrl.addTestingTypeNames = function () {
            openModal().then(function (result) {

            });
        };

        hmlCtrl.addSamples = function () {
            openModal().then(function (result) {

            });
        };

        hmlCtrl.addProperties = function () {
            openModal('Add Properties', 'views/guided/hml/properties/properties.html').then(function (result) {
                hmlCtrl.hml.properties.push(result);
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
                    id: undefined
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