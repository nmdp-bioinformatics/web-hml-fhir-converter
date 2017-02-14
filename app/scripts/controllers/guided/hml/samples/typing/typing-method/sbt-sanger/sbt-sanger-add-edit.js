/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
    'use strict';

    function sbtSangerAddEdit ($scope) {
        /* jshint validthis:true */
        var sbtSangerAddEditCtrl = this;

        sbtSangerAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sbtSangerAddEdit', sbtSangerAddEdit);
    sbtSangerAddEdit.$inject = ['$scope'];
}());