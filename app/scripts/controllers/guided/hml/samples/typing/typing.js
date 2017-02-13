/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typing ($scope, $uibModal, gridCellTemplateFactory, hmlService, guidGenerator) {
        /* jshint validthis: true */
        var typingCtrl = this,
            parentCtrl = $scope.parentCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        typingCtrl.scope = $scope;
        typingCtrl.hml = parentCtrl.hml;
        typingCtrl.selectedTyping = {};
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
                    hmlModel: function () {
                        return typingCtrl.hml;
                    },
                    typing: function () {
                        return {};
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            })
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typing', typing);
    typing.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory', 'hmlService', 'guidGenerator'];
}());