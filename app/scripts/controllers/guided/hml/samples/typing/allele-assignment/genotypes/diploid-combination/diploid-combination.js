/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function diploidCombination ($scope) {
        /* jshint validthis:true */
        var diploidCombinationCtrl = this;

        diploidCombinationCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('diploidCombination', diploidCombination);
    diploidCombination.$inject = ['$scope'];
}());