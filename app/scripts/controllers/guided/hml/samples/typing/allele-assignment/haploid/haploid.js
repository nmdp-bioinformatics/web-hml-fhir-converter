/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function haploid ($scope, $uibModal, objectModelFactory, usSpinnerService) {
        /* jshint validthis:true */
        var haploidCtrl = this,
            parentCtrl = $scope.parentCtrl;

        haploidCtrl.scope = $scope;
        haploidCtrl.hml = parentCtrl.hml;
        haploidCtrl.sampleIndex = parentCtrl.sampleIndex;
        haploidCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        haploidCtrl.addHaploid = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/allele-assignment/haploid/haploid-add-edit.html',
                controller: 'haploidAddEdit',
                controllerAs: 'haplidAddEditCtrl',
                resolve: {
                    haploid: function () {
                        return objectModelFactory.getModelByName('Haploid');
                    },
                    hmlModel: function () {
                        return haploidCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return haploidCtrl.parentCollectionPropertyAllocation;
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
                { propertyString: 'samples', propertyIndex: haploidCtrl.sampleIndex, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'alleleAssignment', propertyIndex: -1, isArray: false },
                { propertyString: 'haploid', propertyIndex: -1, isArray: false }
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('haploid', haploid);
    haploid.$inject = ['$scope', '$uibModal', 'objectModelFactory', 'usSpinnerService'];
}());