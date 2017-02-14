/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function sequence ($scope) {
        /* jshint validthis:true */
        var sequenceCtrl = this;

        sequenceCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sequence', sequenc);
    sequence.$inject = ['$scope'];
}());