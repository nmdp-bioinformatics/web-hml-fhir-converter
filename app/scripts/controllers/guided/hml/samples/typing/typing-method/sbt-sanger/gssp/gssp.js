/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function gssp ($scope) {
        /* jshint validthis:true */
        var gsspCtrl = this;

        gsspCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('gssp', gssp);
    gssp.$inject = ['$scope'];
}());