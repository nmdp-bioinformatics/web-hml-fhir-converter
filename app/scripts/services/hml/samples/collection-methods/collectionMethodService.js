/**
 * Created by abrown3 on 1/13/17.
 */
(function () {
    'use strict';

    function collectionMethodService($http, $q, httpHeaderTransform, appConfig) {
        var service = {
            getCollectionMethodTerminology: function (maxReturn) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'collectionMethod/getMulti/' + maxReturn || 10,
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

            addSingleCollectionMethodTerminology: function (collectionMethod) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'collectionMethod/create',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: collectionMethod,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            removeCollectionMethodTerminology: function (collectionMethod) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'collectionMethod/delete',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'POST',
                    url: url,
                    data: collectionMethod,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            },

            updateCollectionMethodTerminology: function (collectionMethod) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'collectionMethod/update',
                    headers = httpHeaderTransform.postHeaderForResourceSever();

                $http({
                    method: 'PUT',
                    url: url,
                    data: collectionMethod,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            }
        };

        return service;
    }

    anuglar.module('hmlFhirAngularClientApp.services').service('collectionMethodService', collectionMethodService);
    collectionMethodService.$inject = ['$http', '$q', 'httpHeaderTransform', 'appConfig'];
}());