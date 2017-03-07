/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function locusBlock ($scope, $uibModal, objectModelFactory, usSpinnerService) {
        /* jshint validthis:true */
        var locusBlockCtrl = this,
            parentCtrl = $scope.parentCtrl;

        locusBlockCtrl.scope = $scope;
        locusBlockCtrl.hml = parentCtrl.hml;
        locusBlockCtrl.sampleIndex = parentCtrl.sampleIndex;
        locusBlockCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        locusBlockCtrl.addLocusBlock = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/allele-assignment/genotypes/diploid-combination/locus-block/locus-block-add-edit.html',
                controller: 'locusBlockAddEdit',
                controllerAs: 'locusBlockAddEditCtrl',
                resolve: {
                    locusBlock: function () {
                        return objectModelFactory.getModelByName('LocusBlock')
                    },
                    hmlModel: function () {
                        return locusBlockCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return locusBlockCtrl.parentCollectionPropertyAllocation;
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
                { propertyString: 'samples', propertyIndex: locusBlockCtrl.sampleIndex, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'alleleAssignment', propertyIndex: -1, isArray: false },
                { propertyString: 'genotypes', propertyIndex: -1, isArray: true },
                { propertyString: 'diploidCombination', propertyIndex: -1, isArray: false },
                { propertyString: 'locusBlock', propertyIndex: -1, isArray: false }
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('locusBlock', locusBlock);
    locusBlock.$inject = ['$scope', '$uibModal', 'objectModelFactory', 'usSpinnerService'];
}());