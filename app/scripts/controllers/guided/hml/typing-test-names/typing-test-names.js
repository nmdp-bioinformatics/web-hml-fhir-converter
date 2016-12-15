/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function typingTestNames ($scope) {
        /* jshint validthis: true */
        var typingTestNamesCtrl = this;

        typingTestNamesCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNames', typingTestNames);
    typingTestNames.$inject = ['$scope'];
}());