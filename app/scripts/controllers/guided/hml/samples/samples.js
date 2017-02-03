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
            stripTempSampleId(samplesCtrl.selectedSample.id);
            hmlService.updateHml(samplesCtrl.hml).then(function (result) {
                if (result) {
                    $scope.$emit('guided:hml:node:updated', result);
                }
            });
        });

        samplesCtrl.addSampleEntry = function () {
            handleSampleUpdates(samplesCtrl.selectedSample, false);
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/samples-add-edit.html',
                controller: 'samplesAddEdit',
                controllerAs: 'samplesAddEditCtrl',
                resolve: {
                    hmlModel: function () {
                        return samplesCtrl.hml;
                    },
                    sample: function () {
                        return samplesCtrl.selectedSample;
                    }
                }
            });

            modalInstance.result.then(function (hml) {
                if (hml) {
                    samplesCtrl.hml = hml;
                }
            });
        };

        samplesCtrl.removeSample = function (sample) {
            handleSampleUpdates(sample, true);
        };

        function handleSampleUpdates(sample, isDelete) {
            var index = getSampleIndex(sample);

            if (isDelete) {
                samplesCtrl.hml.samples.splice(index, 1);
                return;
            }

            if (index === -1) {
                samplesCtrl.hml.samples.push(sample);
                return;
            }

            samplesCtrl.hml.samples[index] = sample;
        }

        function getSampleIndex (sample) {
            var sampleId;

            if (sample.id) {
                sampleId = sample.id;
            } else {
                sampleId = sample;
            }

            for (var i = 0; i < samplesCtrl.hml.samples.length; i++) {
                if (samplesCtrl.hml.samples[i].id === sampleId) {
                    return i;
                }
            }

            return -1;
        }

        function stripTempSampleId(sampleId) {
            var index = getSampleIndex(sampleId);
            samplesCtrl.hml.samples[index].id = null;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samples', samples);
    samples.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory', 'hmlService'];
}());