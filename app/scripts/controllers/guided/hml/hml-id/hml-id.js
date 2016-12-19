/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlId ($scope, guidGenerator) {
        /* jshint validthis: true */
        var hmlIdCtrl = this,
            parentCtrl = $scope.hmlModalCtrl;

        hmlIdCtrl.scope = $scope;
        hmlIdCtrl.formSubmitted = false;
        hmlIdCtrl.edit = parentCtrl.edit;
        hmlIdCtrl.hmlId = {
            id: guidGenerator.generateRandomGuid(),
            rootName: undefined,
            extension: undefined,
            init: true
        };

        if (hmlIdCtrl.edit) {
            hmlIdCtrl.hmlId = parentCtrl.hml.hmlId;
        }

        $scope.$on('guided:hml:node:update', function () {
            hmlIdCtrl.formSubmitted = true;

            if (!hmlIdCtrl.hmlIdForm.$invalid) {
                hmlIdCtrl.formSubmitted = false;
                $scope.$emit('guided:hml:node:updated', hmlIdCtrl.hmlId);
            }
        });
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlId', hmlId);
    hmlId.$inject = ['$scope', 'guidGenerator'];
}());