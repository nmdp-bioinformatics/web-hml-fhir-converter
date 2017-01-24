/**
 * Created by abrown3 on 12/15/16.
 */

(function () {
    'use strict';

    function properties ($scope, $uibModal, gridCellTemplateFactory) {
        /* jshint validthis: true */
        var propertiesCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        propertiesCtrl.scope = $scope;
        propertiesCtrl.edit = parentCtrl.edit;
        propertiesCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: propertiesCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (propertiesCtrl.edit) {
            propertiesCtrl.gridOptions.data = parentCtrl.hml.properties;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', propertiesCtrl.gridOptions.data);
        });

        propertiesCtrl.addPropertyEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/properties/properties-add-edit.html',
                controller: 'propertiesAddEdit',
                controllerAs: 'propertiesAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    property: function () {
                        return undefined;
                    },
                    selectedProperties: function () {
                        var properties = propertiesCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < properties.length; i++) {
                            idArray.push(properties[i].id)
                        }

                        return idArray;
                    }
                }
            });

            modalInstance.result.then(function (properties) {
                if (properties) {
                    if (properties.constructor === Array) {
                        for (var i = 0; i < properties.length; i++) {
                            propertiesCtrl.gridOptions.data.push(properties[i]);
                        }

                        return;
                    }

                    propertiesCtrl.gridOptions.data.push(properties);
                }
            });
        };

        propertiesCtrl.removeProperty = function (property) {
            propertiesCtrl.gridOptions.data.splice(getPropertyIndex(property), 1);
        };

        function getPropertyIndex (property) {
            for (var i = 0; i < propertiesCtrl.gridOptions.data.length; i++) {
                if (propertiesCtrl.gridOptions.data[i].id === property.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('properties', properties);
    properties.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory'];
}());