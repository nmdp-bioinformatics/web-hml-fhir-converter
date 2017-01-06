/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNamesTerminology($scope, typingTestNameService) {
        /* jshint validthis: true */
        var typingTestNamesTerminologyCtrl = this,
            activeColumnTemplate =
                '<div class="ui-grid-cell-contents">' +
                    '<div class="row">' +
                        '<div class="col-md-12">' +
                            '<input type="checkbox" data-ng-click="typingTestNamesTerminologyCtrl.activateItem(this)" />'
                        '</div>' +
                    '</div>' +
                '</div>';

        typingTestNamesTerminologyCtrl.scope = $scope;
        typingTestNamesTerminologyCtrl.maxQuery = 10;
        typingTestNamesTerminologyCtrl.gridOptions = {
            data: [],
            enableSorting: true,
            showGridFooter: true,
            enableCellEditOnFocus: true,
            columnDefs: [
                { name: 'id', field: 'id', visible: false },
                { name: 'name', field: 'name', displayName: 'Name:', enableCellEdit: true },
                { name: 'description', field: 'description', displayName: 'Description:' },
                { name: 'dateCreated', field: 'dateCreated', displayName: 'Date Created:' },
                { name: 'active', field: 'active', displayName: '', maxWidth: 30, enableColumnMenu: false }
            ]
        };

        typingTestNameService.getTypingTestNameTerminology(typingTestNamesTerminologyCtrl.maxQuery).then(function (typingTestNames) {
            typingTestNamesTerminologyCtrl.gridOptions.data = typingTestNames;
        });
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNamesTerminology', typingTestNamesTerminology);
    typingTestNamesTerminology.$inject = ['$scope', 'typingTestNameService'];
}());