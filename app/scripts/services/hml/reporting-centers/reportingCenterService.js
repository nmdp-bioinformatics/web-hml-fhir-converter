/**
 * Created by abrown3 on 1/12/17.
 */
(function () {
    'use strict';

    function reportingCenterService($http, $q, httpHeaderTransform, appConfig) {
        var service = {
            getReportingCenterTerminology: function (maxReturn) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'reportingCenter/getMulti/' + maxReturn || 10,
                    headers = httpHeaderTransform.getHeaderForResourceServer();

                $http({
                    method: 'GET',
                    url: url,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            addSingleReportingCenterTerminology: function (reportingCenter) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'reportingCenter/create',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: reportingCenter,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            removeSingleReportingCenterTerminology: function (reportingCenter) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'reportingCenter/delete',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: reportingCenter,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            updateSingleReportingCenterTerminology: function (reportingCenter) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'reportingCenter/update',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'PUT',
                    url: url,
                    data: reportingCenter,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('reportingCenterService', reportingCenterService);
    reportingCenterService.inject = ['$http', '$q', 'httpHeaderTransform', 'appConfig'];
}());