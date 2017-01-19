/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function reportingCenter ($scope, $uibModal) {
        /* jshint validthis: true */
        var reportingCenterCtrl = this,
            parentCtrl = $scope.hmlModalCtrl,
            deleteColumnTemplate = '<div class="ui-grid-cell-contents centered-heading">' +
                '<button type="button" class="btn btn-danger btn-xs" data-ng-click="grid.appScope.removeReportingCenter(row.entity)">' +
                '<i class="glyphicon glyphicon-minus" />'
        '</button>' +
        '</div>';

        reportingCenterCtrl.scope = $scope;
        reportingCenterCtrl.edit = parentCtrl.edit;
        reportingCenterCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            appScopeProvider: reportingCenterCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Remove', maxWidth: 75, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        if (reportingCenterCtrl.edit) {
            reportingCenterCtrl.gridOptions.data = parentCtrl.hml.typingTestNames;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', reportingCenterCtrl.gridOptions.data);
        });

        reportingCenterCtrl.addReportingCenterEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/reporting-center/reporting-center-add-edit.html',
                controller: 'reportingCenterAddEdit',
                controllerAs: 'reportingCenterAddEditCtrl',
                resolve: {
                    edit: function () {
                        return false;
                    },
                    reportingCenter: function () {
                        return undefined;
                    }
                }
            });

            modalInstance.result.then(function (typingTestName) {
                if (typingTestName) {
                    if (typingTestName.constructor === Array) {
                        for (var i = 0; i < typingTestName.length; i++) {
                            reportingCenterCtrl.gridOptions.data.push(typingTestName[i]);
                        }

                        return;
                    }

                    reportingCenterCtrl.gridOptions.data.push(typingTestName);
                }
            });
        };

        reportingCenterCtrl.removeReportingCenter = function (reportingCenter) {
            reportingCenterCtrl.gridOptions.data.splice(getReportingCenterIndex(reportingCenter), 1);
        };

        function getReportingCenterIndex (reportingCenter) {
            for (var i = 0; i < reportingCenterCtrl.gridOptions.data.length; i++) {
                if (reportingCenterCtrl.gridOptions.data[i].id === reportingCenter.id) {
                    return i;
                }
            }

            return undefined;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenter', reportingCenter);
    reportingCenter.$inject = ['$scope', '$uibModal'];
}());