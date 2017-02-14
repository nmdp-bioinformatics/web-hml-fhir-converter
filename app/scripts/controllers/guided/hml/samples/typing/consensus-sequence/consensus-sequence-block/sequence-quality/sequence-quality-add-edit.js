/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sequenceQualityAddEdit ($scope) {
        /* jshint validthis:true */
        var sequenceQualityAddEditCtrl = this;

        sequenceQualityAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sequenceQualityAddEdit', sequenceQualityAddEdit);
    sequenceQualityAddEdit.$inject = ['$scope'];
}());