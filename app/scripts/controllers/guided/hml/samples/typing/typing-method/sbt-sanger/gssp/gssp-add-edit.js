/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function gsspAddEdit ($scope) {
        /* jshint validthis:true */
        var gsspAddEditCtrl = this;

        gsspAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('gsspAddEdit', gsspAddEdit);
    gsspAddEdit.$inject = ['$scope'];
}());