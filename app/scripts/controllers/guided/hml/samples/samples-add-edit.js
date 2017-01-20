/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function samplesAddEdit ($scope, $uibModalInstance, $uibModal, edit, sample, selectedSamples, sampleService, appConfig, toaster, typeaheadQueryBuilder) {
        /* jshint validthis: true */
        var samplesAddEditCtrl = this;

        samplesAddEditCtrl.scope = $scope;
        samplesAddEditCtrl.formSubmitted = false;
        samplesAddEditCtrl.edit = edit;
        samplesAddEditCtrl.selectedSampleName = null;
        samplesAddEditCtrl.selectedSample = null
        samplesAddEditCtrl.maxQuery = { number: 10, text: '10' };
        samplesAddEditCtrl.pageNumber = 0;
        samplesAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;
        samplesAddEditCtrl.autoAdd = appConfig.autoAddOnNoResults;

        $scope.$on('samplesAddEditCtrl.addedExternal.success', function (event, result) {
            $uibModalInstance.close(result);
        });

        if (samplesAddEditCtrl.edit) {
            samplesAddEditCtrl.selectedSample = sample;
        }

        samplesAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        samplesAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        samplesAddEditCtrl.add = function (form) {
            samplesAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                samplesAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(samplesAddEditCtrl.selectedSample);
            }
        };

        samplesAddEditCtrl.selectSample = function (item) {
            samplesAddEditCtrl.selectedSample = item;
        };

        samplesAddEditCtrl.getSamples = function (viewValue) {
            return sampleService.getTypeaheadOptions(samplesAddEditCtrl.maxQuery.number,
                typeaheadQueryBuilder.buildTypeaheadQueryWithSelectionExclusion('name', viewValue, false,
                    selectedSamples, 'id')).then(function (response) {
                if (response.length > 0) {
                    return response;
                }

                if (samplesAddEditCtrl.autoAdd) {
                    setTimeout(timeNoResults, appConfig.autoAddOnNoResultsTimer);
                }
            });
        };

        samplesAddEditCtrl.sampleChange = function () {
            samplesAddEditCtrl.selectedSample = null;
        };

        function createTypeAheadItemEntry() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'samplesTerminologyAddEditModal',
                controllerAs: 'samplesTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/samples/terminology/samples-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Sample Item';
                    },
                    samples: function () {
                        return generateSamples();
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
                        body: 'Successfully added Sample.'
                    });

                    $scope.$emit('samplesAddEditCtrl.addedExternal.success', result);
                }
            });
        }

        function generateSamples() {
            return {
                context: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function timeNoResults() {
            if (samplesAddEditCtrl.selectedTypingTest === null) {

                toaster.pop({
                    type: 'info',
                    title: 'Add / Edit Sample',
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

    angular.module('hmlFhirAngularClientApp.controllers').controller('samplesAddEdit', samplesAddEdit);
    samplesAddEdit.$inject = ['$scope', '$uibModalInstance', '$uibModal', 'edit', 'sample', 'selectedSamples', 'sampleService', 'appConfig', 'toaster', 'typeaheadQueryBuilder'];
}());