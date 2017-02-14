/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sequenceAddEdit ($scope) {
        /* jshint validthis:true */
        var seqeuenceAddEditCtrl = this;

        seqeuenceAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sequenceAddEdit', sequenceAddEdit);
    sequenceAddEdit.$inject = ['$scope'];
}());