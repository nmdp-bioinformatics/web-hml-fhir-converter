/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function samplesAddEdit ($scope, $uibModalInstance, $uibModal, sample, selectedSamples, sampleService, appConfig, toaster, typeaheadQueryBuilder, objectModelFactory, templateController, hmlModel, newSample) {
        /* jshint validthis: true */
        var samplesAddEditCtrl = this,
            collectionMethodsTemplateUrl = 'views/guided/hml/samples/collection-methods/collection-methods.html',
            controllerData = templateController.getControllerNameByTemplateUrl(collectionMethodsTemplateUrl);

        samplesAddEditCtrl.scope = $scope;
        samplesAddEditCtrl.hml = hmlModel;
        samplesAddEditCtrl.formSubmitted = false;
        samplesAddEditCtrl.selectedSampleCenterCode = null;
        samplesAddEditCtrl.selectedSample = newSample,
        samplesAddEditCtrl.maxQuery = { number: 10, text: '10' };
        samplesAddEditCtrl.pageNumber = 0;
        samplesAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;
        samplesAddEditCtrl.autoAdd = appConfig.autoAddOnNoResults;
        samplesAddEditCtrl.expandCollectionMethods = false;
        samplesAddEditCtrl.controllerDeclaration = controllerData;
        samplesAddEditCtrl.collectionMethodsTemplateUrl = collectionMethodsTemplateUrl;
        samplesAddEditCtrl.selectedSampleId = newSample.id === null ? 0 : newSample.id;

        if (samplesAddEditCtrl.hml.samples.length === 0) {
            samplesAddEditCtrl.hml.samples.push(newSample);
        }

        $scope.$on('samplesAddEditCtrl.addedExternal.success', function (event, result) {
            $uibModalInstance.close(result);
        });

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
            samplesAddEditCtrl.selectedSampleCenterCode = item.centerCode;
        };

        samplesAddEditCtrl.getSamplesByCenterCode = function (viewValue) {
            return getSamples('centerCode', viewValue);
        };

        samplesAddEditCtrl.sampleChange = function () {
            samplesAddEditCtrl.selectedSample = null;
        };

        samplesAddEditCtrl.toggleCollectionPanel = function () {
            samplesAddEditCtrl.expandCollectionMethods = !samplesAddEditCtrl.expandCollectionMethods;
        };

        function getSamples(term, viewValue) {
            return sampleService.getTypeaheadOptions(samplesAddEditCtrl.maxQuery.number,
                typeaheadQueryBuilder.buildTypeaheadQueryWithSelectionExclusion(term, viewValue, false,
                    selectedSamples, 'id')).then(function (response) {
                if (response.length > 0) {
                    return response;
                }

                if (samplesAddEditCtrl.autoAdd) {
                    setTimeout(timeNoResults, appConfig.autoAddOnNoResultsTimer);
                }
            });
        }

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
                        return objectModelFactory.getSampleModel();
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
    samplesAddEdit.$inject = ['$scope', '$uibModalInstance', '$uibModal', 'sample', 'selectedSamples', 'sampleService', 'appConfig', 'toaster', 'typeaheadQueryBuilder', 'objectModelFactory', 'templateController', 'hmlModel', 'newSample'];
}());