/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlId ($scope) {
        /* jshint validthis: true */
        var hmlIdCtrl = this;

        hmlIdCtrl.scope = $scope;
        hmlIdCtrl.formSubmitted = false;
        hmlIdCtrl.hmlId = {
            rootName: undefined,
            extension: undefined
        };

        $scope.$on('guided:hml:node:update', function () {
            hmlIdCtrl.formSubmitted = true;

            if (!hmlIdCtrl.hmlIdForm.$invalid) {
                hmlIdCtrl.scope.hmlModalCtrl.hml.hmlId = hmlIdCtrl.hmlId;
                hmlIdCtrl.formSubmitted = false;
            }
        });
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlId', hmlId);
    hmlId.$inject = ['$scope'];
}());