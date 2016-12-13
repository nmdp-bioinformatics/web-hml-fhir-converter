/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hmlValidationWarnings ($scope, warnings, file, $uibModalInstance, $uibModal) {
        /*jshint validthis: true */
        var hmlValidationWarningsCtrl = this;

        hmlValidationWarningsCtrl.scope = $scope;
        hmlValidationWarningsCtrl.warnings = warnings;

        hmlValidationWarningsCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlValidationWarningsCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlValidationWarningsCtrl.parseWarningDescription = function (desc) {
            var regexExp = /\[(\d+, ?)+(\d+)?\]/,
                regex = new RegExp(regexExp),
                matches = desc.match(regex),
                position = matches[0].replace('[', '').replace(']', ''),
                line = position.split(',')[0],
                col = position.split(',')[1],
                text = desc.replace(matches[0] + ' ', '');

            return 'Line: ' + line + ' Column: ' + col + ', ' + text;
        };

        hmlValidationWarningsCtrl.removeFile = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/common/confirmation-modal.html',
                controller: 'confirmationModal',
                controllerAs: 'confirmationModalCtrl',
                resolve: {
                    title: function () {
                        return 'Remove file from conversion';
                    },
                    message: function () {
                        return 'If the displayed warnings are cause for concern. Please select \'Remove File\' below.' +
                            ' This will cause the file to be removed from the uploaded conversion list.';
                    }
                }
            });

            modalInstance.result.then(function (result) {
               if (result) {
                   $uibModalInstance.close(file);
               }
            });
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlValidationWarnings', hmlValidationWarnings);
    hmlValidationWarnings.$inject = ['$scope', 'warnings', 'file', '$uibModalInstance', '$uibModal'];
}());
