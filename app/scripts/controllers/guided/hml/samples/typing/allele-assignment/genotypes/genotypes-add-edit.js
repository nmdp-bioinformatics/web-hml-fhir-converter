/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function genotypesAddEdit ($scope) {
        /* jshint validthis:true */
        var genotypesAddEditCtrl = this;

        genotypesAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('genotypesAddEdit', genotypesAddEdit);
    genotypesAddEdit.$inject = ['$scope'];
}());