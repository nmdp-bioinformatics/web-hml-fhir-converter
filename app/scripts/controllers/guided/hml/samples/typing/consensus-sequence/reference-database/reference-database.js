/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function referenceDatabase ($scope) {
        /* jshint validthis:true */
        var referenceDatabaseCtrl = this;

        referenceDatabaseCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('referenceDatabase', referenceDatabase);
    referenceDatabase.$inject = ['$scope'];
}());