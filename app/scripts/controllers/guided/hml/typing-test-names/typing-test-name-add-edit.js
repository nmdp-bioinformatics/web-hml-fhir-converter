/**
 * Created by abrown3 on 12/19/16.
 */
(function () {
    'use strict';

    function typingTestNameAddEdit ($scope, $uibModalInstance, typingTestId, edit, typingTestName, $filter, typingTestNameService, appConfig) {
        /* jshint validthis: true */
        var typingTestNameAddEditCtrl = this;

        typingTestNameAddEditCtrl.scope = $scope;
        typingTestNameAddEditCtrl.formSubmitted = false;
        typingTestNameAddEditCtrl.edit = edit;
        typingTestNameAddEditCtrl.selectedTypingTest = null;
        typingTestNameAddEditCtrl.maxQuery = { number: 10, text: '10' };
        typingTestNameAddEditCtrl.pageNumber = 0;
        typingTestNameAddEditCtrl.resultsPerPage = appConfig.resultsPerPage;

        if (typingTestNameAddEditCtrl.edit) {
            typingTestNameAddEditCtrl.selectedTypingTest = typingTestName;
        }

        typingTestNameAddEditCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        typingTestNameAddEditCtrl.close = function () {
            $uibModalInstance.close();
        };

        typingTestNameAddEditCtrl.add = function (form) {
            typingTestNameAddEditCtrl.formSubmitted = true;

            if (!form.$invalid) {
                typingTestNameAddEditCtrl.formSubmitted = false;
                $uibModalInstance.close(typingTestNameAddEditCtrl.selectedTypingTest);
            }
        };

        typingTestNameAddEditCtrl.selectTypingTest = function (item) {
            typingTestNameAddEditCtrl.selectedTypingTest = item;
        };

        typingTestNameAddEditCtrl.changeMaxResults = function () {
            getTypingTestNames();
        };

        typingTestNameAddEditCtrl.getTypingTestNames = function (viewValue) {
            return typingTestNameService.getTypeaheadOptions(typingTestNameAddEditCtrl.maxQuery.number,
                createTypeaheadQuery(viewValue)).then(function (response) {
                return response;
            });
        };

        function createTypeaheadQuery(viewValue) {
            return {
                criteria: [
                    { propertyName: 'name', queryValue: viewValue, useLike: true }
                ]
            };
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNameAddEdit', typingTestNameAddEdit);
    typingTestNameAddEdit.$inject = ['$scope', '$uibModalInstance', 'typingTestId', 'edit', 'typingTestName', '$filter', 'typingTestNameService', 'appConfig'];
}());