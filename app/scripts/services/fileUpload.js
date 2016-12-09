/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function uploadService ($http, $q, app_config) {
        var service = {
            uploadFileToServer: function (file) {
                var defer = $q.defer(),
                    url = app_config + '';

                $http({
                    method: 'POST',
                    url: url,
                    data: file
                }).success(function (res) {
                    defer.resolve(res);
                });

                return defer.promise;
            }
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('uploadService', uploadService);
    uploadService.$inject = ['$http', '$q', 'app_config'];
}());