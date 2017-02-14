/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
    'use strict';

    function sso ($scope) {
        /* jshint validthis:true */
        var ssoCtrl = this;

        ssoCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('sso', sso);
    sso.$inject = ['$scope'];
}());