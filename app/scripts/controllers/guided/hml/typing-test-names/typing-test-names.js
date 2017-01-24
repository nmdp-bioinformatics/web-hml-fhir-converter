/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function typingTestNames ($scope, $uibModal, gridCellTemplateFactory) {
        /* jshint validthis: true */
        var typingTestNamesCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        typingTestNamesCtrl.scope = $scope;
        typingTestNamesCtrl.edit = parentCtrl.edit;
        typingTestNamesCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: typingTestNamesCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'name', field: 'name', displayName: 'Name:', cellTooltip: function (row) { return row.entity.name; }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'description', field: 'description', displayName: 'Description:', cellTooltip: function (row) { return row.entity.description ;}, headerTooltip: function(col) { return col.displayName; } },,
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (typingTestNamesCtrl.edit) {
            typingTestNamesCtrl.gridOptions.data = parentCtrl.hml.typingTestNames;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', typingTestNamesCtrl.gridOptions.data);
        });

        typingTestNamesCtrl.addTypingTestNameEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/typing-test-names/typing-test-name-add-edit.html',
                controller: 'typingTestNameAddEdit',
                controllerAs: 'typingTestNameAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    typingTestName: function () {
                        return undefined;
                    },
                    selectedTypingTestNames: function () {
                        var typingTestNames = typingTestNamesCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < typingTestNames.length; i++) {
                            idArray.push(typingTestNames[i].id);
                        }

                        return idArray;
                    }
                }
            });

            modalInstance.result.then(function (typingTestName) {
                if (typingTestName) {
                    if (typingTestName.constructor === Array) {
                        for (var i = 0; i < typingTestName.length; i++) {
                            typingTestNamesCtrl.gridOptions.data.push(typingTestName[i]);
                        }

                        return;
                    }

                    typingTestNamesCtrl.gridOptions.data.push(typingTestName);
                }
            });
        };

        typingTestNamesCtrl.removeTypingTestName = function (typingTestName) {
            typingTestNamesCtrl.gridOptions.data.splice(getTypingTestNameIndex(typingTestName), 1);
        };

        function getTypingTestNameIndex (typingTestName) {
            for (var i = 0; i < typingTestNamesCtrl.gridOptions.data.length; i++) {
                if (typingTestNamesCtrl.gridOptions.data[i].id === typingTestName.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNames', typingTestNames);
    typingTestNames.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory'];
}());