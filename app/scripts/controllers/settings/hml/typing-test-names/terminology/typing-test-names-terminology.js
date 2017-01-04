/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminology($scope) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyCtrl = this;

        typingTestNamesTerminologyCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminology', typingTestNamesTerminology);
    typingTestNamesTerminology.$inject = ['$scope'];
}());