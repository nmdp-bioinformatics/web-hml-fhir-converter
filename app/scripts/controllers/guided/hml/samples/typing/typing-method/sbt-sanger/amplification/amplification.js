/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function amplification ($scope) {
        /* jshint validthis:true */
        var amplificationCtrl = this;

        amplificationCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('amplification', amplification);
    amplification.$inject = ['$scope'];
}());