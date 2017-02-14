/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function consensusSequenceBlockAddEdit ($scope) {
        /* jshint validthis:true */
        var consensusSequenceBlockAddEditCtrl = this;

        consensusSequenceBlockAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('consensusSequenceBlockAddEdit', consensusSequenceBlockAddEdit);
    consensusSequenceBlockAddEdit.$inject = ['$scope'];
}());