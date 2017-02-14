/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function rawReadsAddEdit ($scope) {
        /* jshint validthis:true */
        var rawReadsAddEditCtrl = this;

        rawReadsAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('rawReadsAddEdit', rawReadsAddEdit);
    rawReadsAddEdit.$inject = ['$scope'];
}());