/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function uploadService ($http, $q, appConfig, httpHeaderTransform) {
        var service = {
            uploadFileToServer: function (file) {
                var defer = $q.defer(),
                    url = appConfig.miring_base_url + 'validator/ValidateMiring/',
                    headers = httpHeaderTransform.getHeaderForMiring(file.xml);

                $http({
                    method: 'POST',
                    url: url,
                    data: file,
                    headers: headers
                }).success(function (res) {
                    defer.resolve(res);
                }).error(function (err) {
                    var test = err;
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('uploadService', uploadService);
    uploadService.$inject = ['$http', '$q', 'appConfig', 'httpHeaderTransform'];
}());