/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function consensusSequenceAddEdit ($scope) {
        /* jshint validthis:true */
        var consensusSequenceAddEditCtrl = this;

        consensusSequenceAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('consensusSequenceAddEdit', consensusSequenceAddEdit);
    consensusSequenceAddEdit.$inject = ['$scope'];
}());