/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function propertiesAddEdit ($scope, $uibModalInstance, $uibModal, edit, property, selectedProperties, propertyService, appConfig, toaster, typeaheadQueryBuilder) {
        /* jshint validthis: true */
        var propertiesAddEditCtrl = this;

        propertiesAddEditCtrl.scope = $scope;
        propertiesAddEditCtrl.formSubmitted = false;
        propertiesAddEditCtrl.edit = edit;
        propertiesAddEditCtrl.selectedPropertyName = null;
        propertiesAddEditCtrl.selectedProperty = null
        propertiesAddEditCtrl.maxQuery = { number: 10, text: '10' };
        propertiesAddEditCtrl.pageNumber = 0;
        propertiesAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;
        propertiesAddEditCtrl.autoAdd = appConfig.autoAddOnNoResults;

        $scope.$on('propertiesAddEditCtrl.addedExternal.success', function (event, result) {
            $uibModalInstance.close(result);
        });

        if (propertiesAddEditCtrl.edit) {
            propertiesAddEditCtrl.selectedProperty = property;
        }

        propertiesAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        propertiesAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        propertiesAddEditCtrl.add = function (form) {
            propertiesAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                propertiesAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(propertiesAddEditCtrl.selectedProperty);
            }
        };

        propertiesAddEditCtrl.selectProperty = function (item) {
            propertiesAddEditCtrl.selectedProperty = item;
        };

        propertiesAddEditCtrl.getProperties = function (viewValue) {
            return propertyService.getTypeaheadOptions(propertiesAddEditCtrl.maxQuery.number,
                typeaheadQueryBuilder.buildTypeaheadQueryWithSelectionExclusion('name', viewValue, false,
                    selectedProperties, 'id')).then(function (response) {
                if (response.length > 0) {
                    return response;
                }

                if (propertiesAddEditCtrl.autoAdd) {
                    setTimeout(timeNoResults, appConfig.autoAddOnNoResultsTimer);
                }
            });
        };

        propertiesAddEditCtrl.propertyChange = function () {
            propertiesAddEditCtrl.selectedProperty = null;
        };

        function createTypeAheadItemEntry() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'propertiesTerminologyAddEditModal',
                controllerAs: 'propertiesTerminologyAddEditModalCtrl',
                templateUrl: 'views/settings/hml/properties/terminology/properties-terminology-add-edit-modal.html',
                resolve: {
                    title: function () {
                        return 'Add Hml ID Item';
                    },
                    properties: function () {
                        return generateProperty();
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
                        body: 'Successfully added Property.'
                    });

                    $scope.$emit('propertiesAddEditCtrl.addedExternal.success', result);
                }
            });
        }

        function generateProperty() {
            return {
                context: null,
                active: true,
                dateCreated: null,
                id: null
            };
        }

        function timeNoResults() {
            if (propertiesAddEditCtrl.selectedProperty === null) {

                toaster.pop({
                    type: 'info',
                    title: 'Add / Edit Property',
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

    angular.module('hmlFhirAngularClientApp.controllers').controller('propertiesAddEdit', propertiesAddEdit);
    propertiesAddEdit.$inject = ['$scope', '$uibModalInstance', '$uibModal', 'edit', 'property', 'selectedProperties', 'propertyService', 'appConfig', 'toaster', 'typeaheadQueryBuilder'];
}());