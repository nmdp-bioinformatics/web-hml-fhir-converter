/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function consensusSequenceBlock ($scope) {
        /* jshint validthis:true */
        var consensusSequenceBlockCtrl = this;

        consensusSequenceBlockCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('consensusSequenceBlock', consensusSequenceBlock);
    consensusSequenceBlock.$inject = ['$scope'];
}());