/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sbtNgs ($scope) {
        /* jshint validthis:true */
        var sbtNgsCtrl = this;

        sbtNgsCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sbtNgs', sbtNgs);
    sbtNgs.$inject = ['$scope'];
}());