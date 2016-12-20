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

        hmlCtrl.addReportingCenter = function (edit) {
            var titlePrefix = edit ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Reporting Center', 'views/guided/hml/reporting-center/reporting-center.html', edit).then(function (result) {
                if (result) {
                    hmlCtrl.hml.reportingCenter = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed Reporting Center.'
                    });
                }
            });
        };

        hmlCtrl.addHmlId = function (edit) {
            var titlePrefix = edit ? 'Edit' : 'Add';
            openModal(titlePrefix + ' HML ID', 'views/guided/hml/hml-id/hml-id.html', edit).then(function (result) {
                if (result) {
                    hmlCtrl.hml.hmlId = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed HML ID.'
                    });
                }
            });
        };

        hmlCtrl.addTypingTestNames = function (edit) {
            var titlePrefix = edit ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Typing Test Names', 'views/guided/hml/typing-test-names/typing-test-names.html', edit).then(function (result) {
                if (result) {
                    hmlCtrl.hml.typingTestNames = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed Typing Test Name(s).'
                    });
                }
            });
        };

        hmlCtrl.addSamples = function (edit) {
            var titlePrefix = edit ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Samples', 'views/guided/hml/samples/samples.html', edit).then(function (result) {
                if (result) {
                    hmlCtrl.hml.samples.push(result);
                }
            });
        };

        hmlCtrl.addProperties = function (edit) {
            var titlePrefix = edit ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Properties', 'views/guided/hml/properties/properties.html', edit).then(function (result) {
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
                    context: undefined,
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

        function openModal (title, bodyTemplateUrl, edit) {
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
                        },
                        edit: function () {
                            return edit;
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