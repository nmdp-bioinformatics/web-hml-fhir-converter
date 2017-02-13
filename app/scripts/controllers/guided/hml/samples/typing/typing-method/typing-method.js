/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethod ($scope) {
        /* jshint validthis:true */
        var typingMethodCtrl = this;

        typingMethodCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingMethod', typingMethod);
    typingMethod.$inject = ['$scope'];
}());