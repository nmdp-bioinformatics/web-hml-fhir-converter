/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typing ($scope, $uibModal, gridCellTemplateFactory, appConfig, objectModelFactory) {
        /* jshint validthis: true */
        var typingCtrl = this,
            parentCtrl = $scope.parentCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        $scope.parentCtrl = typingCtrl;

        typingCtrl.scope = $scope;
        typingCtrl.hml = parentCtrl.hml;
        typingCtrl.sampleIndex = parentCtrl.sampleIndex;
        typingCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();
        typingCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableRowHeaderSelection: false,
            appScopeProvider: typingCtrl,
            columnDefs: [
                { name: 'id', visible: false },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ],
            multiSelect: false,
            modifierKeysToMultiSelect: false,
            onRegisterApi: function (gridApi) {
                typingCtrl.gridApi = gridApi;

                typingCtrl.gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    typingCtrl.typing = row.entity;
                });
            }
        };

        typingCtrl.addTypingEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/typing-add-edit.html',
                controller: 'typingAddEdit',
                controllerAs: 'typingAddEditCtrl',
                resolve: {
                    typing: function () {
                        return objectModelFactory.getTypingModel();
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            })
        };

        function returnPropertyLocator() {
            return setLocatorIndexes(appConfig.propertiesParentMap.typingParent);
        }

        function setLocatorIndexes(config) {
            for (var i = 0; i < config.length; i++) {
                if (config[i].propertyString === 'samples') {
                    config[i].propertyIndex = typing.sampleIndex;
                }
            }

            return config;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typing', typing);
    typing.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory', 'appConfig', 'objectModelFactory'];
}());