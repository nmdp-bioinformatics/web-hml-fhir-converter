/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminology($scope, typingTestNameService, $uibModal) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyCtrl = this,
            activeColumnTemplate = '<button type="button" class="btn btn-link" data-ng-click="grid.appScope.editItem(row.entity)">Edit</button>' +
                '&nbsp;' + '<input type="checkbox" data-ng-model="row.entity.active" />&nbsp;<small>Active</small>';

        typingTestNamesTerminologyCtrl.scope = $scope;
        typingTestNamesTerminologyCtrl.maxQuery = 10;
        typingTestNamesTerminologyCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableCellEditOnFocus: true,
            appScopeProvider: typingTestNamesTerminologyCtrl,
            columnDefs: [
                {name: 'id', field: 'id', visible: false},
                {name: 'name', field: 'name', displayName: 'Name:'},
                {name: 'description', field: 'description', displayName: 'Description:'},
                {name: 'dateCreated', field: 'dateCreated', displayName: 'Date Created:'},
                {name: 'active', field: 'active', displayName: 'Modify', cellTemplate: activeColumnTemplate}
            ]
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
                    // reoload page
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
                    // reoload page
                }
            });
        };

        typingTestNameService.getTypingTestNameTerminology(typingTestNamesTerminologyCtrl.maxQuery).then(function (typingTestNames) {
            typingTestNamesTerminologyCtrl.gridOptions.data = typingTestNames;
        });

        function generateTypingTestName() {
            return {
                name: undefined,
                description: undefined,
                active: true,
                dateCreated: undefined,
                id: undefined
            };
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminology', typingTestNamesTerminology);
    typingTestNamesTerminology.$inject = ['$scope', 'typingTestNameService', '$uibModal'];
}());