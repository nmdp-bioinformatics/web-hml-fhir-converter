/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function samplesAddEdit ($scope, $uibModalInstance, hmlModel, sample, appConfig, indexCollection) {
        /* jshint validthis: true */
        var samplesAddEditCtrl = this

        samplesAddEditCtrl.scope = $scope;
        samplesAddEditCtrl.hml = hmlModel;
        samplesAddEditCtrl.formSubmitted = false;
        samplesAddEditCtrl.selectedSample = sample;
        samplesAddEditCtrl.parentCollectionItemid = sample.id;
        samplesAddEditCtrl.sampleIndex = getSampleIndex(samplesAddEditCtrl.selectedSample)
        samplesAddEditCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();
        samplesAddEditCtrl.panelData = appConfig.samplePanels;
        samplesAddEditCtrl.expandedPanels = {
            collectionMethods: false,
            properties: false,
            typing: false
        };

        $scope.parentCtrl = samplesAddEditCtrl;

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
                $uibModalInstance.close(samplesAddEditCtrl.hml);
            }
        };

        samplesAddEditCtrl.togglePanel = function (panelName) {
            samplesAddEditCtrl.expandedPanels[panelName] = !samplesAddEditCtrl.expandedPanels[panelName];
        };

        function getSampleIndex(sample) {
            return indexCollection.getCollectionItemIndex(samplesAddEditCtrl.hml, 'samples', sample.id);
        }

        function returnPropertyLocator() {
            return [
                { propertyString: 'samples', propertyIndex: samplesAddEditCtrl.sampleIndex },
                { propertyString: 'properties', propertyIndex: -1 }
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samplesAddEdit', samplesAddEdit);
    samplesAddEdit.$inject = ['$scope', '$uibModalInstance', 'hmlModel', 'sample', 'appConfig', 'indexCollection'];
}());