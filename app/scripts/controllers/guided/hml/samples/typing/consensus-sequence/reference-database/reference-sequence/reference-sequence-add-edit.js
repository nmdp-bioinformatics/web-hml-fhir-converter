/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function referenceSequenceAddEdit ($scope) {
        /* jshint validthis:true */
        var referenceSequenceAddEditCtrl = this;

        referenceSequenceAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('referenceSequenceAddEdit', referenceSequenceAddEdit);
    referenceSequenceAddEdit.$inject = ['$scope'];
}());