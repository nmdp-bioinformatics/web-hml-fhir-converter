/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sequenceQuality ($scope) {
        /* jshint validthis:true */
        var sequenceQualityCtrl = this;

        sequenceQualityCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sequenceQuality', sequenceQuality);
    sequenceQuality.$inject = ['$scope'];
}());