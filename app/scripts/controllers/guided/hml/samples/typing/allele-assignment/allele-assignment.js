/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function alleleAssignment ($scope) {
        /* jshint validthis:true */
        var alleleAssignmentCtrl = this;

        alleleAssignmentCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('alleleAssignment', alleleAssignment);
    alleleAssignment.$inject = ['$scope'];
}());