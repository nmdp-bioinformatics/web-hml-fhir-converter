/**
 * Created by abrown3 on 1/13/17.
 */
(function () {
    'use strict';

    function collectionMethodsTerminology($scope, collectionMethodService, $uibModal, $filter) {
        /* jshint validthis: true */
        var collectionMethodsTerminologyCtrl = this,
            dateColumnTemplate = '<div class="ui-grid-cell-contents ng-binding ng-scope" title="{{ row.entity.dateCreated | date : \'medium\' }}">{{ row.entity.dateCreated | date : \'medium\' }}</div>',
            activeColumnTemplate = '<button type="button" class="btn btn-link" data-ng-click="grid.appScope.editItem(row.entity)">Edit</button>' +
                '<input type="checkbox" data-ng-model="row.entity.active" />&nbsp;<small>Active</small>',
            deleteColumnTemplate = '<button type="button" class="btn btn-link red-link" data-ng-click="grid.appScope.deleteItem(row.entity)">Delete</button>';

        collectionMethodsTerminologyCtrl.scope = $scope;
        collectionMethodsTerminologyCtrl.maxQuery = 10;
        collectionMethodsTerminologyCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableCellEditOnFocus: true,
            appScopeProvider: collectionMethodsTerminologyCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'dateCreated', field: 'dateCreated', displayName: 'Date Created:', cellTemplate: dateColumnTemplate, cellTooltip: function (row) { return parseDate(row.entity.dateCreated); }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'active', field: 'active', displayName: 'Modify', enableColumnMenu: false, cellTemplate: activeColumnTemplate, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Delete', maxWidth: 60, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        collectionMethodsTerminologyCtrl.deleteItem = function (collectionMethod) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/common/confirmation-modal.html',
                controller: 'confirmationModal',
                controllerAs: 'confirmationModalCtrl',
                resolve: {
                    title: function () {
                        return 'Remove Reporting Center from Database?'
                    },
                    message: function () {
                        return 'This action cannot be undone, please ensure you would like to remove the entry with Name: ' +
                            collectionMethod.name + ' that was Created on: ' + collectionMethod.dateCreated;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    collectionMethodService.removeCollectionMethodTerminology(collectionMethod).then(function (res) {
                        getCollectionMethods();
                    });
                }
            })
        };

        collectionMethodsTerminologyCtrl.addItem = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'collectionMethodsTerminologyAddEditModalCtrl',
                controllerAs: 'collectionMethodsTerminologyAddEditModalCtrlCtrl',
                templateUrl: 'views/settings/hml/samples/collection-methods/terminology/collection-methods-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Typing Test Name Item';
                    },
                    collectionMethod: function () {
                        return generateCollectionMethod();
                    },
                    edit: function () {
                        return false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getCollectionMethods();
                }
            });
        };

        collectionMethodsTerminologyCtrl.editItem = function (collectionMethod) {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'collectionMethodsTerminologyAddEditModalCtrl',
                controllerAs: 'collectionMethodsTerminologyAddEditModalCtrlCtrl',
                templateUrl: 'views/settings/hml/samples/collection-methods/terminology/collection-methods-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Edit Reporting Center Item';
                    },
                    collectionMethod: function () {
                        return collectionMethod;
                    },
                    edit: function () {
                        return true;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getCollectionMethods();
                }
            });
        };

        getCollectionMethods();

        function generateCollectionMethod() {
            return {
                name: null,
                description: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function parseDate(date) {
            return $filter('date')(date, 'medium');
        }

        function getCollectionMethods() {
            collectionMethodService.getCollectionMethodTerminology(collectionMethodsTerminologyCtrl.maxQuery).then(function (collectionMethods) {
                collectionMethodsTerminologyCtrl.gridOptions.data = collectionMethods;
            });
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('collectionMethodsTerminology', collectionMethodsTerminology);
    collectionMethodsTerminology.$inject = ['$scope', 'collectionMethodService', '$uibModal', '$filter'];
}());