/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function rawReads ($scope) {
        /* jshint validthis:true */
        var rawReadsCtrl = this;

        rawReadsCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('rawReads', rawReads);
    rawReads.$inject = ['$scope'];
}());