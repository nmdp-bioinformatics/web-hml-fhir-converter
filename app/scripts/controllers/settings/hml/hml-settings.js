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

        };

        hmlSettingsCtrl.launchHmlId = function () {

        };

        hmlSettingsCtrl.launchTypingTestNames = function () {
            openModal('Typing Test Name Settings', 'views/settings/hml/')
        };

        hmlSettingsCtrl.launchSamples = function () {

        };

        hmlSettingsCtrl.launchProperties = function () {

        };

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