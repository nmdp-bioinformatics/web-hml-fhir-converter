/**
 * Created by abrown3 on 12/13/16.
 */
(function () {
    'use strict';

    function hmlVersion ($scope, $uibModalInstance, version, versionService, appConfig, versions, maxQuery) {
        /*jshint validthis: true */
        var hmlVersionCtrl = this;

        hmlVersionCtrl.scope = $scope;
        hmlVersionCtrl.versions = versions;
        hmlVersionCtrl.version = version;
        hmlVersionCtrl.maxQuery = maxQuery;
        hmlVersionCtrl.pageNumber = 0;
        hmlVersionCtrl.resultsPerPage = appConfig.resultsPerPage;

        hmlVersionCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlVersionCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlVersionCtrl.update = function () {
            $uibModalInstance.close(hmlVersionCtrl.version);
        };

        hmlVersionCtrl.maxQueryChange = function () {
            getHmlVersions();
        };

        getHmlVersions();

        function getHmlVersions() {
            versionService.getVersionTerminology(hmlVersionCtrl.maxQuery, hmlVersionCtrl.pageNumber).then(function (result) {
                hmlVersionCtrl.versions = result;
            });
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlVersion', hmlVersion);
    hmlVersion.$inject = ['$scope', '$uibModalInstance', 'appConfig', 'version', 'versionService', 'appConfig', 'versions', 'maxQuery'];
}());