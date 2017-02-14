/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function glstringAddEdit ($scope) {
        /* jshint validthis:true */
        var glstringAddEditCtrl = this;

        glstringAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('glstringAddEdit', glstringAddEdit);
    glstringAddEdit.$inject = ['$scope'];
}());