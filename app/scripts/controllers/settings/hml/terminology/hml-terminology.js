/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function hmlTerminology($scope) {
        /* jshint validthis: true */
        var hmlTerminologyCtrl = this;

        hmlTerminologyCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlTerminology', hmlTerminology);
    hmlTerminology.$inject = ['$scope'];
}());
