/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sbtNgsAddEdit ($scope) {
        /* jshint validthis:true */
        var sbtNgsAddEditCtrl = this;

        sbtNgsAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sbtNgsAddEdit', sbtNgsAddEdit);
    sbtNgsAddEdit.$inject = ['$scope'];
}());