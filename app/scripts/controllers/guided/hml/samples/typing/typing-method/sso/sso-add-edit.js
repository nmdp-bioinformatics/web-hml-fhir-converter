/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
    'use strict';

    function ssoAddEdit ($scope) {
        /* jshint validthis:true */
        var ssoAddEditCtrl = this;

        ssoAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('ssoAddEdit', ssoAddEdit);
    ssoAddEdit.$inject = ['$scope'];
}());