/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function locusBlockAddEdit ($scope) {
        /* jshint validthis:true */
        var locusBlockAddEditCtrl = this;

        locusBlockAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('locusBlockAddEdit', locusBlockAddEdit);
    locusBlockAddEdit.$inject = ['$scope'];
}());