/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethod ($scope, $uibModal, gridCellTemplateFactory, appConfig, objectModelFactory) {
        /* jshint validthis:true */
        var typingMethodCtrl = this,
            parentCtrl = $scope.parentCtrl,
            deleteColumnTemplate = gridCellTemplateFactory.createRemoveCellTemplate();

        typingMethodCtrl.scope = $scope;
        typingMethodCtrl.hml = parentCtrl.hml;
        typingMethodCtrl.sampleIndex = parentCtrl.sampleIndex;

    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingMethod', typingMethod);
    typingMethod.$inject = ['$scope', '$uibModal', 'gridCellTemplateFactory', 'appConfig', 'objectModelFactory'];
}());