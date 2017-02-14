/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function alleles ($scope) {
        /* jshint validthis:true */
        var allelesCtrl = this;

        allelesCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('alleles', alleles);
    alleles.$inject = ['$scope'];
}());