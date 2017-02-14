/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function genotypes ($scope) {
        /* jshint validthis:true */
        var genotypesCtrl = this;

        genotypesCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('genotypes', genotypes);
    genotypes.$inject = ['$scope'];
}());