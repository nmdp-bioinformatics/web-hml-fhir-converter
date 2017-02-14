/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function subAmplificationAddEdit ($scope) {
        /* jshint validthis:true */
        var subAmplificationAddEditCtrl = this;

        subAmplificationAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('subAmplificationAddEdit', subAmplificationAddEdit);
    subAmplificationAddEdit.$inject = ['$scope'];
}());