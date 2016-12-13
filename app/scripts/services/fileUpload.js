/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function uploadService ($http, $q, appConfig, httpHeaderTransform, $httpParamSerializerJQLike, xmlConverter) {
        var service = {
            uploadFileToServer: function (file) {
                var defer = $q.defer(),
                    url = appConfig.miring_base_url + 'validator/ValidateMiring/',
                    headers = httpHeaderTransform.getHeaderForMiring();

                $http({
                    method: 'POST',
                    url: url,
                    data: $httpParamSerializerJQLike({ xml: file.xml }),
                    headers: headers
                }).success(function (res) {
                    file.result = xmlConverter.parseXmlToJson(res);
                    defer.resolve(file);
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('uploadService', uploadService);
    uploadService.$inject = ['$http', '$q', 'appConfig', 'httpHeaderTransform', '$httpParamSerializerJQLike', 'xmlConverter'];
}());