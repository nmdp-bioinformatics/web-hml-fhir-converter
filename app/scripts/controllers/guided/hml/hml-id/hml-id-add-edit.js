/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function hmlIdAddEdit ($scope, $uibModalInstance, $uibModal, hmlModel, hmlIdService, appConfig, toaster, typeaheadQueryBuilder, hmlService) {
        /* jshint validthis: true */
        var hmlIdAddEditCtrl = this;

        hmlIdAddEditCtrl.scope = $scope;
        hmlIdAddEditCtrl.formSubmitted = false;
        hmlIdAddEditCtrl.maxQuery = { number: 10, text: '10' };
        hmlIdAddEditCtrl.pageNumber = 0;
        hmlIdAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;
        hmlIdAddEditCtrl.autoAdd = appConfig.autoAddOnNoResults;
        hmlIdAddEditCtrl.hml = hmlModel;
        hmlIdAddEditCtrl.selectedHmlIdRootName = null;

        $scope.$on('hmlIdAddEditCtrl.addedExternal.success', function (event, result) {
            $uibModalInstance.close(result);
        });

        hmlIdAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlIdAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlIdAddEditCtrl.save = function (form) {
            hmlIdAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                hmlIdAddEditCtrl.formSubmitted = false;
                hmlService.updateHml(hmlIdAddEditCtrl.hml).then(function (result) {
                    if (result) {
                        $uibModalInstance.close(result);
                    }
                });
            }
        };

        hmlIdAddEditCtrl.hmlIdChange = function () {
            hmlIdAddEditCtrl.hml.hmlId = null;
        };

        hmlIdAddEditCtrl.selectHmlId = function (item) {
            hmlIdAddEditCtrl.hml.hmlId = item;
        };

        hmlIdAddEditCtrl.getHmlIds = function (viewValue) {
            return hmlIdService.getTypeaheadOptions(hmlIdAddEditCtrl.maxQuery.number,
                typeaheadQueryBuilder.buildTypeaheadQueryWithSelectionExclusion('rootName', viewValue, false,
                    [], 'id')).then(function (response) {
                if (response.length > 0) {
                    return response;
                }

                if (hmlIdAddEditCtrl.autoAdd) {
                    setTimeout(timeNoResults, appConfig.autoAddOnNoResultsTimer);
                }
            });
        };

        function createTypeAheadItemEntry() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'hmlIdTerminologyAddEditModal',
                controllerAs: 'hmlIdTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/hml-id/terminology/hml-id-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Hml ID Item';
                    },
                    hmlIds: function () {
                        return objectModelFactory.getHmlIdModel();
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
                        body: 'Successfully added Hml ID.'
                    });

                    $scope.$emit('hmlIdAddEditCtrl.addedExternal.success', result);
                }
            });
        }

        function timeNoResults() {
            if (hmlIdAddEditCtrl.selectedHmlId === null) {

                toaster.pop({
                    type: 'info',
                    title: 'Add / Edit Hml ID',
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

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlIdAddEdit', hmlIdAddEdit);
    hmlIdAddEdit.$inject = ['$scope', '$uibModalInstance', '$uibModal', 'hmlModel', 'hmlIdService', 'appConfig', 'toaster', 'typeaheadQueryBuilder', 'hmlService'];
}());