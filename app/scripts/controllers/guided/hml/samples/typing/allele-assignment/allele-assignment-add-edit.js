/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function alleleAssignmentAddEdit ($scope) {
        /* jshint validthis:true */
        var alleleAssignmentAddEditCtrl = this;

        alleleAssignmentAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('alleleAssignmentAddEdit', alleleAssignmentAddEdit);
    alleleAssignmentAddEdit.$inject = ['$scope'];
}());