/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typing ($scope, $uibModal, appConfig, objectModelFactory, usSpinnerService) {
        /* jshint validthis: true */
        var typingCtrl = this,
            parentCtrl = $scope.parentCtrl;

        typingCtrl.scope = $scope;
        typingCtrl.hml = parentCtrl.hml;
        typingCtrl.sampleIndex = parentCtrl.sampleIndex;
        typingCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        typingCtrl.addTypingEntry = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/typing-add-edit.html',
                controller: 'typingAddEdit',
                controllerAs: 'typingAddEditCtrl',
                resolve: {
                    typing: function () {
                        return objectModelFactory.getTypingModel();
                    },
                    hmlModel: function () {
                        return typingCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return typingCtrl.parentCollectionPropertyAllocation;
                    },
                    edit: function () {
                        return false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            });
        };

        function returnPropertyLocator() {
            return setLocatorIndexes(appConfig.propertiesParentMap.typingParent);
        }

        function setLocatorIndexes(config) {
            for (var i = 0; i < config.length; i++) {
                if (config[i].propertyString === 'samples') {
                    config[i].propertyIndex = typingCtrl.sampleIndex;
                }
            }

            return config;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typing', typing);
    typing.$inject = ['$scope', '$uibModal', 'appConfig', 'objectModelFactory', 'usSpinnerService'];
}());