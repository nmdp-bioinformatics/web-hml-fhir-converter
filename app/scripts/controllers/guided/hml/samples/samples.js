/**
 * Created by abrown3 on 12/15/16.
 */

(function () {
    'use strict';

    function samples ($scope, $uibModal) {
        /* jshint validthis: true */
        var samplesCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = '<div class="ui-grid-cell-contents centered-heading">' +
                '<button type="button" class="btn btn-danger btn-xs" data-ng-click="grid.appScope.removeSample(row.entity)">' +
                '<i class="glyphicon glyphicon-minus" />'
        '</button>' +
        '</div>';

        samplesCtrl.scope = $scope;
        samplesCtrl.edit = parentCtrl.edit;
        samplesCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: samplesCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (samplesCtrl.edit) {
            samplesCtrl.gridOptions.data = parentCtrl.hml.samples;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', samplesCtrl.gridOptions.data);
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
                    selectedSamples: function () {
                        var samples = samplesCtrl.gridOptions.data,
                            idArray = [];

                        for (var i = 0; i < samples.length; i++) {
                            idArray.push(samples[i].id)
                        }

                        return idArray;
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
    samples.$inject = ['$scope', '$uibModal'];
}());