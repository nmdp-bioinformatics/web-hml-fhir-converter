/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
   'use strict';

   function ssp ($scope, $uibModal, objectModelFactory, usSpinnerService) {
       /* jshint validthis:true */
       var sspCtrl = this,
           parentCtrl = $scope.parentCtrl;

       usSpinnerService.stop('index-spinner');

       sspCtrl.scope = $scope;
       sspCtrl.hml = parentCtrl.hml;
       sspCtrl.sampleIndex = parentCtrl.sampleIndex;
       sspCtrl.parentCollectionPropertyAllocation = returnPropertyLocator();

       sspCtrl.addSsp = function () {
           usSpinnerService.spin('index-spinner');
           var modalInstance = $uibModal.open({
               animation: true,
               templateUrl: 'views/guided/hml/samples/typing/typing-method/ssp/ssp-add-edit.html',
               controller: 'sspAddEdit',
               controllerAs: 'sspAddEditCtrl',
               resolve: {
                   ssp: function () {
                       return objectModelFactory.getModelByName('Ssp');
                   },
                   hmlModel: function () {
                       return sspCtrl.hml;
                   },
                   parentCollectionPropertyAllocation: function () {
                       return sspCtrl.parentCollectionPropertyAllocation;
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
               { propertyString: 'samples', propertyIndex: sspCtrl.sampleIndex, isArray: true },
               { propertyString: 'typing', propertyIndex: -1, isArray: false },
               { propertyString: 'typingMethod', propertyIndex: -1, isArray: false },
               { propertyString: 'ssp', propertyIndex: -1, isArray: false }
           ];
       }
   }

   angular.module('hmlFhirAngularClientApp.controllers').controller('ssp', ssp);
   ssp.$inject = ['$scope', '$uibModal', 'objectModelFactory', 'usSpinnerService'];
}());