/**
 * Created by abrown3 on 12/15/16.
 */
(function () {
    'use strict';

    function typingTestNames ($scope, guidGenerator, $uibModal) {
        /* jshint validthis: true */
        var typingTestNamesCtrl = this,
            parentCtrl = $scope.hmlModalCtrl;

        typingTestNamesCtrl.scope = $scope;
        typingTestNamesCtrl.edit = parentCtrl.edit;
        typingTestNamesCtrl.typingTestNames = [];

        if (typingTestNamesCtrl.edit) {
            typingTestNamesCtrl.typingTestNames = parentCtrl.hml.typingTestNames;
        }

        $scope.$on('guided:hml:node:update', function () {
            $scope.$emit('guided:hml:node:updated', typingTestNamesCtrl.typingTestNames);
        });


        typingTestNamesCtrl.editTypingTestNameEntry = function (typingTestName) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/typing-test-names/typing-test-name-add-edit.html',
                controller: 'typingTestNameAddEdit',
                controllerAs: 'typingTestNameAddEditCtrl',
                resolve: {
                    typingTestId: function () {
                        return typingTestName.id;
                    },
                    edit: function () {
                        return true;
                    },
                    typingTestName: function () {
                        return typingTestName;
                    }
                }
            });

            modalInstance.result.then(function (typingTestName) {
                if (typingTestName) {
                    updateTypingTestName(typingTestName);
                }
            });
        };

        typingTestNamesCtrl.addTypingTestNameEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/typing-test-names/typing-test-name-add-edit.html',
                controller: 'typingTestNameAddEdit',
                controllerAs: 'typingTestNameAddEditCtrl',
                resolve: {
                    typingTestId: function () {
                        return guidGenerator.generateRandomGuid();
                    },
                    edit: function () {
                        return false;
                    },
                    typingTestName: function () {
                        return undefined;
                    }
                }
            });

            modalInstance.result.then(function (typingTestName) {
                if (typingTestName) {
                    typingTestNamesCtrl.typingTestNames.push(typingTestName);
                }
            });
        };

        typingTestNamesCtrl.removeTypingTestName = function (typingTestName) {
            var index = getTypingTestNameIndex(typingTestName);
            typingTestNamesCtrl.typingTestNames.splice(index, 1);
        };

        function getTypingTestNameIndex (typingTestName) {
            for (var i = 0; i < typingTestNamesCtrl.typingTestNames.length; i++) {
                if (typingTestNamesCtrl.typingTestNames[i].id === typingTestName.id) {
                    return i;
                }
            }

            return undefined;
        }

        function updateTypingTestName (typingTestName) {
            for (var i = 0; i < typingTestNamesCtrl.typingTestNames.length; i++) {
                if (typingTestNamesCtrl.typingTestNames[i].id === typingTestName.id) {
                    typingTestNamesCtrl.typingTestNames[i] = typingTestName;
                    return;
                }
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingTestNames', typingTestNames);
    typingTestNames.$inject = ['$scope', 'guidGenerator', '$uibModal'];
}());