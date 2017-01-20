/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function reportingCenterAddEdit ($scope, $uibModalInstance, $uibModal, edit, reportingCenter, selectedReportingCenters, reportingCenterService, appConfig, toaster, typeaheadQueryBuilder) {
        /* jshint validthis: true */
        var reportingCenterAddEditCtrl = this;

        reportingCenterAddEditCtrl.scope = $scope;
        reportingCenterAddEditCtrl.formSubmitted = false;
        reportingCenterAddEditCtrl.edit = edit;
        reportingCenterAddEditCtrl.selectedReportingCenterName = null;
        reportingCenterAddEditCtrl.selectedReportingCenter = null
        reportingCenterAddEditCtrl.maxQuery = { number: 10, text: '10' };
        reportingCenterAddEditCtrl.pageNumber = 0;
        reportingCenterAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;
        reportingCenterAddEditCtrl.autoAdd = appConfig.autoAddOnNoResults;

        $scope.$on('reporingCenterAddEditCtrl.addedExternal.success', function (event, result) {
            $uibModalInstance.close(result);
        });

        if (reportingCenterAddEditCtrl.edit) {
            reportingCenterAddEditCtrl.selectedReportingCenter = reportingCenter;
        }

        reportingCenterAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        reportingCenterAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        reportingCenterAddEditCtrl.add = function (form) {
            reportingCenterAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                reportingCenterAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(reportingCenterAddEditCtrl.selectedReportingCenter);
            }
        };

        reportingCenterAddEditCtrl.selectReportingCenter = function (item) {
            reportingCenterAddEditCtrl.selectedReportingCenter = item;
        };

        reportingCenterAddEditCtrl.getReportingCenters = function (viewValue) {
            return reportingCenterService.getTypeaheadOptions(reportingCenterAddEditCtrl.maxQuery.number,
                typeaheadQueryBuilder.buildTypeaheadQueryWithSelectionExclusion('context', viewValue, false,
                    selectedReportingCenters, 'id')).then(function (response) {
                if (response.length > 0) {
                    return response;
                }

                if (reportingCenterAddEditCtrl.autoAdd) {
                    setTimeout(timeNoResults, appConfig.autoAddOnNoResultsTimer);
                }
            });
        };

        reportingCenterAddEditCtrl.reportingCenterChange = function () {
            reportingCenterAddEditCtrl.selectedReportingCenter = null;
        };

        function createTypeAheadItemEntry() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'reportingCenterTerminologyAddEditModal',
                controllerAs: 'reportingCenterTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/reporting-center/terminology/reporting-center-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Reporting Center Item';
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
                    toaster.pop({
                        type: 'info',
                        body: 'Successfully added Typing Test Name entry.'
                    });

                    $scope.$emit('reporingCenterAddEditCtrl.addedExternal.success', result);
                }
            });
        }

        function generateReportingCenter() {
            return {
                context: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function timeNoResults() {
            if (reportingCenterAddEditCtrl.selectedTypingTest === null) {

                toaster.pop({
                    type: 'info',
                    title: 'Add / Edit Reporting Center',
                    body: 'Not finding the data you need? Close this notification to be taken to add/edit page.',
                    toasterId: 1,
                    timeout: 0,
                    onHideCallback: function () {
                        createTypeAheadItemEntry();
                    }
                });
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('reportingCenterAddEdit', reportingCenterAddEdit);
    reportingCenterAddEdit.$inject = ['$scope', '$uibModalInstance', '$uibModal', 'edit', 'reportingCenter', 'selectedReportingCenters', 'reportingCenterService', 'appConfig', 'toaster', 'typeaheadQueryBuilder'];
}());