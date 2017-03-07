/**
 * Created by abrown3 on 2/14/17.
 */
(function () {
    'use strict';

    function glstring ($scope, $uibModal, objectModelFactory, usSpinnerService) {
        /* jshint validthis:true */
        var glstringCtrl = this,
            parentCtrl = $scope.parentCtrl;

        glstringCtrl.scope = $scope;
        glstringCtrl.hml = parentCtrl.hml;
        glstringCtrl.sampleIndex = parentCtrl.sampleIndex;
        glstringCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        glstringCtrl.addGlString = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/samples/typing/allele-assignment/glstring/glstring-add-edit.html',
                controller: 'glstringAddEdit',
                controllerAs: 'glstringAddEditCtrl',
                resolve: {
                    glstring: function () {
                        return objectModelFactory.getModelByName('GlString');
                    },
                    hmlModel: function () {
                        return glstringCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return glstringCtrl.parentCollectionPropertyAllocation;
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
                { propertyString: 'samples', propertyIndex: glstringCtrl.sampleIndex, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'alleleAssignment', propertyIndex: -1, isArray: false },
                { propertyString: 'glstring', propertyIndex: -1, isArray: false }
            ];
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('glstring', glstring);
    glstring.$inject = ['$scope', '$uibModal', 'objectModelFactory', 'usSpinnerService'];
}());