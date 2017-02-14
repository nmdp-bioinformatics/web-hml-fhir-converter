/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function haploid ($scope) {
        /* jshint validthis:true */
        var haploidCtrl = this;

        haploidCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('haploid', haploid);
    haploid.$inject = ['$scope'];
}());