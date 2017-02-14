/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function diploidCombinationAddEdit ($scope) {
        /* jshint validthis:true */
        var diploidCombinationAddEditCtrl = this;

        diploidCombinationAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('diploidCombinationAddEdit', diploidCombinationAddEdit);
    diploidCombinationAddEdit.$inject = ['$scope'];
}());