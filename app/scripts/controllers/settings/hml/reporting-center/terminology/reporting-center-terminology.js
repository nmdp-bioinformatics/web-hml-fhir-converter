/**
 * Created by abrown3 on 1/12/17.
 */
(function () {
    'use strict';

    function reportingCenterTerminology($scope, reportingCenterService, $uibModal, $filter, toaster) {
        /* jshint validthis: true */
        var reportingCenterTerminologyCtrl = this,
            dateColumnTemplate = '<div class="ui-grid-cell-contents ng-binding ng-scope" title="{{ row.entity.dateCreated | date : \'medium\' }}">{{ row.entity.dateCreated | date : \'medium\' }}</div>',
            activeColumnTemplate = '<button type="button" class="btn btn-link" data-ng-click="grid.appScope.editItem(row.entity)">Edit</button>' +
                '<input type="checkbox" data-ng-model="row.entity.active" />&nbsp;<small>Active</small>',
            deleteColumnTemplate = '<button type="button" class="btn btn-link red-link" data-ng-click="grid.appScope.deleteItem(row.entity)">Delete</button>';

        reportingCenterTerminologyCtrl.scope = $scope;
        reportingCenterTerminologyCtrl.maxQuery = 10;
        reportingCenterTerminologyCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableCellEditOnFocus: true,
            appScopeProvider: reportingCenterTerminologyCtrl,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'context', field: 'context', displayName: 'Context:', cellTooltip: function (row) { return row.entity.context; }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'dateCreated', field: 'dateCreated', displayName: 'Date Created:', cellTemplate: dateColumnTemplate, cellTooltip: function (row) { return parseDate(row.entity.dateCreated); }, headerTooltip: function(col) { return col.displayName; } },
                { name: 'active', field: 'active', displayName: 'Modify', enableColumnMenu: false, cellTemplate: activeColumnTemplate, headerTooltip: function(col) { return col.displayName; } },
                { field: 'delete', displayName: 'Delete', maxWidth: 60, enableColumnMenu: false, cellTemplate: deleteColumnTemplate }
            ]
        };

        reportingCenterTerminologyCtrl.deleteItem = function (reportingCenter) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/common/confirmation-modal.html',
                controller: 'confirmationModal',
                controllerAs: 'confirmationModalCtrl',
                resolve: {
                    title: function () {
                        return 'Remove Reporting Center from Database?'
                    },
                    message: function () {
                        return 'This action cannot be undone, please ensure you would like to remove the entry with Context: ' +
                            reportingCenter.context + ' that was Created on: ' + reportingCenter.dateCreated;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    reportingCenterService.removeSingleReportingCenterTerminology(reportingCenter).then(function (res) {
                        getReportingCenters();

                        if (res) {
                            toaster.pop({
                                type: 'info',
                                body: 'Successfully deleted Reporting Center entry.'
                            });
                        }
                    });
                }
            })
        };

        reportingCenterTerminologyCtrl.addItem = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'reportingCenterTerminologyAddEditModal',
                controllerAs: 'reportingCenterTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/reporting-center/terminology/reporting-center-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Typing Test Name Item';
                    },
                    reportingCenter: function () {
                        return generateReportingCenter();
                    },
                    edit: function () {
                        return false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getReportingCenters();

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully added Reporting Center entry.'
                    });
                }
            });
        };

        reportingCenterTerminologyCtrl.editItem = function (reportingCenter) {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'reportingCenterTerminologyAddEditModal',
                controllerAs: 'reportingCenterTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/reporting-center/terminology/reporting-center-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Edit Reporting Center Item';
                    },
                    reportingCenter: function () {
                        return reportingCenter;
                    },
                    edit: function () {
                        return true;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    getReportingCenters();

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully edited Reporting Center entry.'
                    });
                }
            });
        };

        getReportingCenters();

        function generateReportingCenter() {
            return {
                name: null,
                description: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function parseDate(date) {
            return $filter('date')(date, 'medium');
        }

        function getReportingCenters() {
            reportingCenterService.getReportingCenterTerminology(reportingCenterTerminologyCtrl.maxQuery).then(function (reportingCenters) {
                reportingCenterTerminologyCtrl.gridOptions.data = reportingCenters;
            });
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenterTerminology', reportingCenterTerminology);
    reportingCenterTerminology.$inject = ['$scope', 'reportingCenterService', '$uibModal', '$filter', 'toaster'];
}());