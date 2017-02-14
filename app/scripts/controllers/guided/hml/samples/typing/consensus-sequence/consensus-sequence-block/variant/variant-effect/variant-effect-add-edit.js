/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function variantEffectAddEdit ($scope) {
        /* jshint validthis:true */
        var variantEffectAddEditCtrl = this;

        variantEffectAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('variantEffectAddEdit', variantEffectAddEdit);
    variantEffectAddEdit.$inject = ['$scope'];
}());