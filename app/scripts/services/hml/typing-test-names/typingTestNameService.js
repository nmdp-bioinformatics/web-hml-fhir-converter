/**
 * Created by abrown3 on 1/4/17.
 */
(function () {
    'use strict';

    function typingTestNameService($http, $q, httpHeaderTransform, $httpParamSerializerJQLike, appConfig, dateConverter) {
        var service = {
            getTypingTestNameTerminology: function (maxReturn) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'hml/typingTestNames/' + maxReturn || 10,
                    headers = httpHeaderTransform.getHeaderForResourceServer();

                $http({
                    method: 'GET',
                    url: url,
                    headers: headers
                }).success(function (res) {
                    var parsedObj = dateConverter.parseDate(res, 'dateCreated');
                    defer.resolve(parsedObj);
                });

                return defer.promise;
            },

            addSingleTypingTestNameTerminology: function (typingTestName) {
                var defer = $q.defer(),
                    url = appConfig.resource_server_base_url + 'hml/typingTestName',
                    headers = httpHeaderTransform.getHeaderForResourceServer();

                $http({
                    method: 'POST',
                    url: url,
                    data: typingTestName,
                    headers: headers
                }).success(function (res) {
                    var parsedObj = dateConverter.parseDate(res, 'dateCreated');
                    defer.resolve(parsedObj);
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('typingTestNameService', typingTestNameService);
    typingTestNameService.$inject = ['$http', '$q', 'httpHeaderTransform', '$httpParamSerializerJQLike', 'appConfig', 'dateConverter'];
}());