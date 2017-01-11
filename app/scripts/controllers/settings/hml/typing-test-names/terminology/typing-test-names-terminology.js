/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminology($scope, typingTestNameService, $uibModal) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyCtrl = this,
            activeColumnTemplate = '<button type="button" class="btn btn-link" data-ng-click="grid.appScope.editItem(row.entity)">Edit</button>' +
                '<input type="checkbox" data-ng-model="row.entity.active" />&nbsp;<small>Active</small>',
            deleteColumnTemplate = '<button type="button" class="btn btn-link red-link" data-ng-click="grid.appScope.deleteItem(row.entity)">Delete</button>';

        typingTestNamesTerminologyCtrl.scope = $scope;
        typingTestNamesTerminologyCtrl.maxQuery = 10;
        typingTestNamesTerminologyCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableCellEditOnFocus: true,
            appScopeProvider: typingTestNamesTerminologyCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'name', field: 'name', displayName: 'Name:' },
                { name: 'description', field: 'description', displayName: 'Description:' },
                { name: 'dateCreated', field: 'dateCreated', displayName: 'Date Created:' },
                { name: 'active', field: 'active', displayName: 'Modify', enableColumnMenu: false, cellTemplate: activeColumnTemplate },
                { field: 'delete', displayName: 'Delete', maxWidth: 60, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        typingTestNamesTerminologyCtrl.deleteItem = function (typingTestName) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/common/confirmation-modal.html',
                controller: 'confirmationModal',
                controllerAs: 'confirmationModalCtrl',
                resolve: {
                    title: function () {
                        return 'Remove Typing Test Name from Database?'
                    },
                    message: function () {
                        return 'This action cannot be undone, please ensure you would like to remove the entry with Name: ' +
                                typingTestName.name + ' and Description: ' + typingTestName.description + ' that was Created on: ' +
                                typingTestName.dateCreated;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    typingTestNameService.removeSingleTypingTestNameTerminology(typingTestName).then(function (res) {

                    });
                }
            })
        };

        typingTestNamesTerminologyCtrl.addItem = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'typingTestNamesTerminologyAddEditModal',
                controllerAs: 'typingTestNamesTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/typing-test-names/terminology/typing-test-names-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Typing Test Name Item';
                    },
                    typingTestName: function () {
                        return generateTypingTestName();
                    },
                    edit: function () {
                        return false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getTypingTestNames();
                }
            });
        };

        typingTestNamesTerminologyCtrl.editItem = function (typingTestName) {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'typingTestNamesTerminologyAddEditModal',
                controllerAs: 'typingTestNamesTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/typing-test-names/terminology/typing-test-names-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Edit Typing Test Name Item';
                    },
                    typingTestName: function () {
                        return typingTestName;
                    },
                    edit: function () {
                        return true;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getTypingTestNames();
                }
            });
        };

        getTypingTestNames();

        function generateTypingTestName() {
            return {
                name: null,
                description: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function getTypingTestNames() {
            typingTestNameService.getTypingTestNameTerminology(typingTestNamesTerminologyCtrl.maxQuery).then(function (typingTestNames) {
                typingTestNamesTerminologyCtrl.gridOptions.data = typingTestNames;
            });
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminology', typingTestNamesTerminology);
    typingTestNamesTerminology.$inject = ['$scope', 'typingTestNameService', '$uibModal'];
}());