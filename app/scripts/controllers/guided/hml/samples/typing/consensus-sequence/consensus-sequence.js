/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function consensusSequence ($scope) {
        /* jshint validthis:true */
        var consensusSequenceCtrl = this;

        consensusSequenceCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('consensusSequence', consensusSequence);
    consensusSequence.$inject = ['$scope'];
}());