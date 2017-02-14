/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function amplificationAddEdit ($scope) {
        /* jshint validthis:true */
        var amplificationAddEditCtrl = this;

        amplificationAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('amplificationAddEdit', amplificationAddEdit);
    amplificationAddEdit.$inject = ['$scope'];
}());