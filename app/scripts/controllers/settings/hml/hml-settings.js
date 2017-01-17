/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function hmlSettings($scope, $q, $uibModal) {
        /* jshint validthis: true */
        var hmlSettingsCtrl = this;

        hmlSettingsCtrl.scope = $scope;

        hmlSettingsCtrl.launchReportingCenter = function () {
            openModal('Reporting Center Settings', 'views/settings/hml/reporting-center/terminology/reporting-center-terminology.html').then(function (result) {

            });
        };

        hmlSettingsCtrl.launchHmlId = function () {

        };

        hmlSettingsCtrl.launchTypingTestNames = function () {
            openModal('Typing Test Name Settings', 'views/settings/hml/typing-test-names/terminology/typing-test-names-terminology.html').then(function (result) {

            });
        };

        hmlSettingsCtrl.launchSamples = function () {

        };

        hmlSettingsCtrl.launchProperties = function () {

        };

        hmlSettingsCtrl.openTerminology = function (nodeName) {
            var modalConfig = {
                title: '',
                viewPath: '',
                controller: ''
            };

            switch (nodeName) {
                case 'settings':
                    modalConfig.title = 'Collection Methods Terminology Settings';
                    modalConfig.viewPath = 'views/settings/hml/samples/sample-terminology-modal.html';
                    modalConfig.controller = 'sampleTerminologyModal'
                    break;
                default:
                    return;
            }

            openModalSpecific(modalConfig.title, modalConfig.viewPath, modalConfig.controller).then(function (result) {

            });
        };

        function openModalSpecific(title, viewUrl, controller) {
            var defer = $q.defer(),
                modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    controller: controller,
                    controllerAs: controller + 'Ctrl',
                    templateUrl: viewUrl,
                    resolve: {
                        title: function() {
                            return title;
                        }
                    }
                });

            modalInstance.result.then(function (result) {
                defer.resolve(result);
            });

            return defer.promise;
        }

        function openModal (title, bodyTemplateUrl) {
            var defer = $q.defer(),
                modalInstance = $uibModal.open({
                    animation: true,
                    controller: 'hmlSettingsModal',
                    controllerAs: 'hmlSettingsModalCtrl',
                    templateUrl: 'views/settings/hml/hml-settings-modal.html',
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

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlSettings', hmlSettings);
    hmlSettings.$inject = ['$scope', '$q', '$uibModal'];
}());