/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
    'use strict';

    function sspAddEdit ($scope) {
        /* jshint validthis:true */
        var sspAddEditCtrl = this;

        sspAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sspAddEdit', sspAddEdit);
    sspAddEdit.$inject = ['$scope'];
}());