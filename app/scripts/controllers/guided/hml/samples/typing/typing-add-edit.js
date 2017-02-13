/**
 * Created by abrown3 on 2/11/17.
 */
(function () {
    'use strict';

    function typingAddEdit ($scope) {
        /* jshint validthis: true */
        var typingAddEditCtrl = this;

        typingCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingAddEdit', typingAddEdit);
    typingAddEdit.$inject = ['$scope'];
}());