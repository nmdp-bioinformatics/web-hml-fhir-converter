/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typing ($scope) {
        /* jshint validthis: true */
        var typingCtrl = this;

        typingCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typing', typing);
    typing.$inject = ['$scope'];
}());