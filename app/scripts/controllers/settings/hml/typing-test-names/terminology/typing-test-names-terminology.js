/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminology($scope, typingTestNameService) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyCtrl = this;

        typingTestNamesTerminologyCtrl.scope = $scope;
        typingTestNamesTerminologyCtrl.typingTestNames = [];
        typingTestNamesTerminologyCtrl.maxQuery = 10;

        typingTestNameService.getTypingTestNameTerminology(typingTestNamesTerminologyCtrl.maxQuery).then(function (typingTestNames) {
            typingTestNamesTerminologyCtrl.typingTestNames = typingTestNames;
        });
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminology', typingTestNamesTerminology);
    typingTestNamesTerminology.$inject = ['$scope', 'typingTestNameService'];
}());