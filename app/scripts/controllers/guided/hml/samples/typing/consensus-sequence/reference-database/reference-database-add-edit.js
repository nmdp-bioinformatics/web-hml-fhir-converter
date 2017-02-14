/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function referenceDatabaseAddEdit ($scope) {
        /* jshint validthis:true */
        var referenceDatabaseAddEditCtrl = this;

        referenceDatabaseAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('referenceDatabaseAddEdit', referenceDatabaseAddEdit);
    referenceDatabaseAddEdit.$inject = ['$scope'];
}());