/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function allelesAddEdit ($scope) {
        /* jshint validthis:true */
        var allelesAddEditCtrl = this;

        allelesAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('allelesAddEdit', allelesAddEdit);
    allelesAddEdit.$inject = ['$scope'];
}());