/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function locusBlock ($scope) {
        /* jshint validthis:true */
        var locusBlockCtrl = this;

        locusBlockCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('locusBlock', locusBlock);
    locusBlock.$inject = ['$scope'];
}());