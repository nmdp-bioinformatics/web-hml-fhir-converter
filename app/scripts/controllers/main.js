(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hmlFhirAngularClientApp.controller:mainCtrl
     * @description
     * # mainCtrl
     * Controller of the hmlFhirAngularClientApp
     */

    function main($scope, $uibModal) {
        /*jshint validthis: true */
        var mainCtrl = this;

        mainCtrl.scope = $scope;

        mainCtrl.launchFileConverter = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/file/file.html',
                controller: 'file',
                controllerAs: 'fileCtrl',
                resolve: {
                    title: function () {
                        return 'Upload HML file to parse.';
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {

                }
            });
        };

        mainCtrl.launchGuidedUiConverter = function () {

        };

        mainCtrl.launchSettings = function () {

        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('main', main);
    main.$inject = ['$scope', '$uibModal'];
}());