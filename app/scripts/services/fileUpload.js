/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function uploadService ($http, $q) {
        var service = {
            uploadFileToServer: function (file) {

            };
        };

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('uploadService', uploadService);
    uploadService.$inject = ['$http', '$q'];
}());