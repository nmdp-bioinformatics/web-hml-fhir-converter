/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function samples ($scope) {
        /* jshint validthis: true */
        var samplesCtrl = this;

        samplesCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('samples', samples);
    samples.$inject = ['$scope'];
}());