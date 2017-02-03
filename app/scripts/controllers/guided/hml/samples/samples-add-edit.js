/**
 * Created by abrown3 on 1/18/17.
 */
(function () {
    'use strict';

    function samplesAddEdit ($scope, $uibModalInstance, templateController, hmlModel, sample) {
        /* jshint validthis: true */
        var samplesAddEditCtrl = this,
            collectionMethodsTemplateUrl = 'views/guided/hml/samples/collection-methods/collection-methods.html',
            controllerData = templateController.getControllerNameByTemplateUrl(collectionMethodsTemplateUrl);

        samplesAddEditCtrl.scope = $scope;
        samplesAddEditCtrl.hml = hmlModel;
        samplesAddEditCtrl.formSubmitted = false;
        samplesAddEditCtrl.selectedSample = sample;
        samplesAddEditCtrl.sampleIndex = getSampleIndex(samplesAddEditCtrl.selectedSample)
        samplesAddEditCtrl.expandCollectionMethods = false;
        samplesAddEditCtrl.controllerDeclaration = controllerData;
        samplesAddEditCtrl.collectionMethodsTemplateUrl = collectionMethodsTemplateUrl;

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

        samplesAddEditCtrl.toggleCollectionPanel = function () {
            samplesAddEditCtrl.expandCollectionMethods = !samplesAddEditCtrl.expandCollectionMethods;
        };

        function getSampleIndex(sample) {
            for (var i = 0; i < samplesAddEditCtrl.hml.samples.length; i++) {
                if (samplesAddEditCtrl.hml.samples[i].id === sample.id) {
                    return i;
                }
            }

            return -1;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samplesAddEdit', samplesAddEdit);
    samplesAddEdit.$inject = ['$scope', '$uibModalInstance', 'templateController', 'hmlModel', 'sample'];
}());