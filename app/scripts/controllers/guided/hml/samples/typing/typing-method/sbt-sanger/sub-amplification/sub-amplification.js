/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function subAmplification ($scope) {
        /* jshint validthis:true */
        var subAmplificationCtrl = this;

        subAmplificationCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('subAmplification', subAmplification);
    subAmplification.$inject = ['$scope'];
}());