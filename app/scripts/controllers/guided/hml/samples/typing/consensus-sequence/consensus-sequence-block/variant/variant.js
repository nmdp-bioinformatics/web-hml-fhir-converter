/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function variant ($scope) {
        /* jshint validthis:true */
        var variantCtrl = this;

        variantCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('variant', variant);
    variant.$inject = ['$scope'];
}());