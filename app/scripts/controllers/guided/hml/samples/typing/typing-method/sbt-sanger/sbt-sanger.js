/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
    'use strict';

    function sbtSanger ($scope) {
        /* jshint validthis:true */
        var sbtSangerCtrl = this;

        sbtSangerCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sbtSanger', sbtSanger);
    sbtSanger.$inject = ['$scope'];
}());