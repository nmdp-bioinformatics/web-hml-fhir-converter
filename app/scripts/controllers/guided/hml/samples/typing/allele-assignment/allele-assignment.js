/**
 * Created by abrown3 on 2/12/17.
 */
(function () {
    'use strict';

    function alleleAssignment ($scope, $uibModal, appConfig, usSpinnerService, objectModelFactory) {
        /* jshint validthis:true */
        var alleleAssignmentCtrl = this,
            parentCtrl = $scope.parentCtrl;

        alleleAssignmentCtrl.scope = $scope;
        alleleAssignmentCtrl.hml = parentCtrl.hml;
        alleleAssignmentCtrl.sampleIndex = parentCtrl.sampleIndex;
        alleleAssignmentCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

        usSpinnerService.stop('index-spinner');

        alleleAssignmentCtrl.addAlleleAssignment = function () {
            usSpinnerService.spin('index-spinner');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml/samples/typing/allele-assignment/allele-assignment-add-edit.html',
                controller: 'alleleAssignmentAddEdit',
                controllerAs: 'alleleAssignmentAddEditCtrl',
                resolve: {
                    alleleAssignment: function () {
                        return objectModelFactory.getModelByName('AlleleAssignment');
                    },
                    hmlModel: function () {
                        return alleleAssignmentCtrl.hml;
                    },
                    parentCollectionPropertyAllocation: function () {
                        return alleleAssignmentCtrl.parentCollectionPropertyAllocation;
                    },
                    edit: function () {
                        return  false;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            });
        };

        function returnPropertyLocator() {
            return setLocatorIndexes(appConfig.propertiesParentMap.alleleAssignmentParent);
        }

        function setLocatorIndexes(config) {
            for (var i = 0; i < config.length; i++) {
                if (config[i].propertyString === 'samples') {
                    config[i].propertyIndex = alleleAssignmentCtrl.sampleIndex;
                }
            }

            return config;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('alleleAssignment', alleleAssignment);
    alleleAssignment.$inject = ['$scope', '$uibModal', 'appConfig', 'usSpinnerService', 'objectModelFactory'];
}());