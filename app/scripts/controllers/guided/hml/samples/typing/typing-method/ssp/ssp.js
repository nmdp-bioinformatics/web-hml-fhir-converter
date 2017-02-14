/**
 * Created by abrown3 on 2/13/17.
 */
(function () {
   'use strict';

   function ssp ($scope) {
       /* jshint validthis:true */
       var sspCtrl = this;

       sspCtrl.scope = $scope;
   }

   angular.module('hmlFhirAngularClientApp.controllers').controller('ssp', ssp);
   ssp.$inject = ['$scope'];
}());