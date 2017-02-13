/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethodAddEdit ($scope) {
        /* jshint validthis:true */
        var typingMethodAddEditCtrl = this;

        typingMethodAddEditCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingMethodAddEdit', typingMethodAddEdit);
    typingMethodAddEdit.$inject = ['$scope'];
}());