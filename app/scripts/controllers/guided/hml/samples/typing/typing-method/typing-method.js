/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function typingMethod ($scope, $uibModal, appConfig, objectModelFactory) {
        /* jshint validthis:true */
        var typingMethodCtrl = this,
            parentCtrl = $scope.parentCtrl;

        typingMethodCtrl.scope = $scope;
        typingMethodCtrl.hml = parentCtrl.hml;
        typingMethodCtrl.sampleIndex = parentCtrl.sampleIndex;

        typingMethodCtrl.addTypingMethodEntry = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/typing-method/typing-method-add-edit.html',
                controller: 'typingMethodAddEdit',
                controllerAs: 'typingMethodAddEditCtrl',
                resolve: {
                    typingMethod: function () {
                        return objectModelFactory.getModelByName('TypingMethod');
                    },
                    hmlModel: function () {
                        return typingMethodCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return typingMethodCtrl.parentCollectionPropertyAllocation;
                    },
                    edit: function () {
                        return false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            });
        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('typingMethod', typingMethod);
    typingMethod.$inject = ['$scope', '$uibModal', 'appConfig', 'objectModelFactory'];
}());
