/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNameService($http, $q, httpHeaderTransform, appConfig) {
        var service = {
            getTypingTestNameTerminology: function (maxReturn) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'typingTestName/getMulti' + maxReturn || 10,
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

            addSingleTypingTestNameTerminology: function (typingTestName) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'typingTestName/create',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: typingTestName,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            removeSingleTypingTestNameTerminology: function (typingTestName) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'typingTestName/delete',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: typingTestName,
                    headers: headers
                }).success(function (res) {
                   defer.resolve(res);
                });

                return defer.promise;
            },

            updateSingleTypingTestNameTerminology: function (typingTestName) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'typingTestName/update',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'PUT',
                    url: url,
                    data: typingTestName,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('typingTestNameService', typingTestNameService);
    typingTestNameService.$inject = ['$http', '$q', 'httpHeaderTransform', 'appConfig'];
}());