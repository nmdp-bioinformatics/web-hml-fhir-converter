/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function hmlId ($scope) {
        /* jshint validthis: true */
        var hmlIdCtrl = this;

        hmlIdCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlId', hmlId);
    hmlId.$inject = ['$scope'];
}());