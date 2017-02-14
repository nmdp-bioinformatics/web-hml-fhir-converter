/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function referenceSequence ($scope) {
        /* jshint validthis:true */
        var referenceSequenceCtrl = this;

        referenceSequenceCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('referenceSequence', referenceSequence);
    referenceSequence.$inject = ['$scope'];
}());