/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function haploidAddEdit ($scope) {
        /* jshint validthis:true */
        var haploidAddEditCtrl = this;

        haploidAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('haploidAddEdit', haploidAddEdit);
    haploidAddEdit.$inject = ['$scope'];
}());