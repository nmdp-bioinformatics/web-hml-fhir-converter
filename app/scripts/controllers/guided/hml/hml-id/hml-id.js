/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlId ($scope, $uibModal, gridCellTemplateFactory) {
        /* jshint validthis: true */
        var hmlIdCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        hmlIdCtrl.scope = $scope;
        hmlIdCtrl.edit = parentCtrl.edit;
        hmlIdCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: hmlIdCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (hmlIdCtrl.edit) {
            hmlIdCtrl.gridOptions.data = parentCtrl.hml.hmlIds;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', hmlIdCtrl.gridOptions.data);
        });

        hmlIdCtrl.addHmlIdEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/hml-id/hml-id-add-edit.html',
                controller: 'hmlIdAddEdit',
                controllerAs: 'hmlIdAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    hmlId: function () {
                        return undefined;
                    },
                    selectedHmlIds: function () {
                        var hmlIds = hmlIdCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < hmlIds.length; i++) {
                            idArray.push(hmlIds[i].id)
                        }

                        return idArray;
                    }
                }
            });

            modalInstance.result.then(function (hmlIds) {
                if (hmlIds) {
                    if (hmlIds.constructor === Array) {
                        for (var i = 0; i < hmlIds.length; i++) {
                            hmlIdCtrl.gridOptions.data.push(hmlIds[i]);
                        }

                        return;
                    }

                    hmlIdCtrl.gridOptions.data.push(hmlIds);
                }
            });
        };

        hmlIdCtrl.removeHmlId = function (hmlId) {
            hmlIdCtrl.gridOptions.data.splice(getHmlIdIndex(hmlId), 1);
        };

        function getHmlIdIndex (hmlId) {
            for (var i = 0; i < hmlIdCtrl.gridOptions.data.length; i++) {
                if (hmlIdCtrl.gridOptions.data[i].id === hmlId.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlId', hmlId);
    hmlId.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory'];
}());