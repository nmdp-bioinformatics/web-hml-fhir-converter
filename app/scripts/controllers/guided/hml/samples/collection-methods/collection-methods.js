/**
 * Created by abrown3 on 1/20/17.
 */
/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function collectionMethods ($scope, $uibModal) {
        /* jshint validthis: true */
        var collectionMethodsCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = '<div class="ui-grid-cell-contents centered-heading">' +
                '<button type="button" class="btn btn-danger btn-xs" data-ng-click="grid.appScope.removeCollectionMethod(row.entity)">' +
                '<i class="glyphicon glyphicon-minus" />'
        '</button>' +
        '</div>';

        collectionMethodsCtrl.scope = $scope;
        collectionMethodsCtrl.edit = parentCtrl.edit;
        collectionMethodsCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: collectionMethodsCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (collectionMethodsCtrl.edit) {
            collectionMethodsCtrl.gridOptions.data = parentCtrl.hml.collectionMethods;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', collectionMethodsCtrl.gridOptions.data);
        });

        collectionMethodsCtrl.addCollectionMethodEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/collection-methods/collection-methods-add-edit.html',
                controller: 'collectionMethodsAddEdit',
                controllerAs: 'collectionMethodsAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    collectionMethod: function () {
                        return undefined;
                    },
                    selectedCollectionMethods: function () {
                        var collectionMethods = collectionMethodsCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < collectionMethods.length; i++) {
                            idArray.push(collectionMethods[i].id)
                        }

                        return idArray;
                    }
                }
            });

            modalInstance.result.then(function (collectionMethods) {
                if (collectionMethods) {
                    if (collectionMethods.constructor === Array) {
                        for (var i = 0; i < collectionMethods.length; i++) {
                            collectionMethodsCtrl.gridOptions.data.push(collectionMethods[i]);
                        }

                        return;
                    }

                    collectionMethodsCtrl.gridOptions.data.push(collectionMethods);
                }
            });
        };

        collectionMethodsCtrl.removeCollectionMethod = function (collectionMethod) {
            collectionMethodsCtrl.gridOptions.data.splice(getCollectionMethodIndex(collectionMethod), 1);
        };

        function getCollectionMethodIndex (collectionMethod) {
            for (var i = 0; i < collectionMethodsCtrl.gridOptions.data.length; i++) {
                if (collectionMethodsCtrl.gridOptions.data[i].id === collectionMethod.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('collectionMethods', collectionMethods);
    collectionMethods.$inject = ['$scope', '$uibModal'];
}());