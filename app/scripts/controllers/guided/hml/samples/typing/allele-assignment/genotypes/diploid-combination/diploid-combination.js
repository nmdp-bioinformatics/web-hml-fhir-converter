/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function diploidCombination ($scope, $uibModal, objectModelFactory, usSpinnerService) {
        /* jshint validthis:true */
        var diploidCombinationCtrl = this,
            parentCtrl = $scope.parentCtrl;

        diploidCombinationCtrl.scope = $scope;
        diploidCombinationCtrl.hml = parentCtrl.hml;
        diploidCombinationCtrl.sampleIndex = parentCtrl.sampleIndex;
        diploidCombinationCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        diploidCombinationCtrl.addDiploidCombination = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/allele-assignment/genotypes/diploid-combination/diploid-combination-add-edit.html',
                controller: 'diploidCombinationAddEdit',
                controllerAs: 'diploidCombinationAddEditCtrl',
                resolve: {
                    diploidCombination: function () {
                        return objectModelFactory.getModelByName('DiploidCombination')
                    },
                    hmlModel: function () {
                        return diploidCombinationCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return diploidCombinationCtrl.parentCollectionPropertyAllocation;
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

        function returnPropertyLocator () {
            return [
                { propertyString: 'samples', propertyIndex: diploidCombinationCtrl.sampleIndex, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'alleleAssignment', propertyIndex: -1, isArray: false },
                { propertyString: 'genotypes', propertyIndex: -1, isArray: true },
                { propertyString: 'diploidCombination', propertyIndex: -1, isArray: false }
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('diploidCombination', diploidCombination);
    diploidCombination.$inject = ['$scope', '$uibModal', 'objectModelFactory', 'usSpinnerService'];
}());