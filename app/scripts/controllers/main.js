(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hmlFhirAngularClientApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the hmlFhirAngularClientApp
     */

    angular.module('hmlFhirAngularClientApp.controllers').controller('main', main);
    main.$inject = ['$scope', '$uibModal'];

    function main($scope, $uibModal) {
        var mainCtrl = this;

        mainCtrl.launchFileConverter = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/file/file.html',
                controller: 'file',
                controllerAs: 'fileCtrl',
                resolve: {
                    title: function () {
                        return 'Upload HML file to parse.'
                    }
                }
            });

            modalInstance.result.then(function (result) {

            });
        };

        mainCtrl.launchGuidedUiConverter = function () {

        };

        mainCtrl.launchSettings = function () {

        };
    }
}());