/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function variantEffect ($scope) {
        /* jshint validthis:true */
        var variantEffectCtrl = this;

        variantEffectCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('variantEffect', variantEffect);
    variantEffect.$inject = ['$scope'];
}());