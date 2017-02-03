/**
 * Created by abrown3 on 12/15/16.
 */

(function () {
    'use strict';

    function samples ($scope, $uibModal, gridCellTemplateFactory, hmlService) {
        /* jshint validthis: true */
        var samplesCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        samplesCtrl.selectedSample = parentCtrl.newModel;
        samplesCtrl.scope = $scope;
        samplesCtrl.hml = parentCtrl.hml;
        samplesCtrl.gridOptions = {
            data: samplesCtrl.hml.samples,
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: samplesCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'centerCode', field: 'centerCode', displayName: 'Center Code:', cellTooltip: function (row) { return row.entity.centerCode; }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'collectionMethods', field: 'collectionMethods', displayName: 'Collection Methods:', headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        $scope.$on('guided:hml:node:update', function () {
            hmlService.updateHml(samplesCtrl.hml).then(function (result) {
                if (result) {
                    $scope.$emit('guided:hml:node:updated', result);
                }
            });
        });

        samplesCtrl.addSampleEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/samples-add-edit.html',
                controller: 'samplesAddEdit',
                controllerAs: 'samplesAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    sample: function () {
                        return undefined;
                    },
                    hmlModel: function () {
                        return samplesCtrl.hml;
                    },
                    selectedSamples: function () {
                        var samples = samplesCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < samples.length; i++) {
                            idArray.push(samples[i].id)
                        }

                        return idArray;
                    },
                    newSample: function () {
                        return samplesCtrl.selectedSample;
                    }
                }
            });

            modalInstance.result.then(function (samples) {
                if (samples) {
                    if (samples.constructor === Array) {
                        for (var i = 0; i < samples.length; i++) {
                            samplesCtrl.gridOptions.data.push(samples[i]);
                        }

                        return;
                    }

                    samplesCtrl.gridOptions.data.push(samples);
                }
            });
        };

        samplesCtrl.removeSample = function (sample) {
            samplesCtrl.gridOptions.data.splice(getSampleIndex(sample), 1);
        };

        function getSampleIndex (sample) {
            for (var i = 0; i < samplesCtrl.gridOptions.data.length; i++) {
                if (samplesCtrl.gridOptions.data[i].id === sample.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samples', samples);
    samples.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory', 'hmlService'];
}());