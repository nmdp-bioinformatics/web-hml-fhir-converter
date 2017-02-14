/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function glstring ($scope) {
        /* jshint validthis:true */
        var glstringCtrl = this;

        glstringCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('glstring', glstring);
    glstring.$inject = ['$scope'];
}());