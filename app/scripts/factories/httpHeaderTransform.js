/**
 * Created by abrown3 on 12/12/16.
 */
(function () {
    'use strict';

    function httpHeaderTransform () {
        var factory = {
            getHeaderForMiring: function () {
                return {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
            },

            getHeaderForResourceServer: function () {
                return {
                    'Content-Type': 'application/json'
                };
            },

            postHeaderForResourceSever: function () {
                return {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('httpHeaderTransform', httpHeaderTransform);
    httpHeaderTransform.$inject = [];
}());