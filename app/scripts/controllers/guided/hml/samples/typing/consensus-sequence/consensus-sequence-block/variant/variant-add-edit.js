/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function variantAddEdit ($scope) {
        /* jshint validthis:true */
        var variantAddEditCtrl = this;

        variantAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('variantAddEdit', variantAddEdit);
    variantAddEdit.$inject = ['$scope'];
}());