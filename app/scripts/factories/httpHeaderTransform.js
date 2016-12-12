/**
 * Created by abrown3 on 12/12/16.
 */
(function () {
    'use strict';

    function httpHeaderTransform () {
        var factory = {
            getHeaderForMiring: function (xml) {
                return {
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'en-US,en;q:=0.8',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Content-Length': xml.length,
                    'Host': 'miring.b12x.org',
                    'Referrer': 'http://miring.b12x.org',
                    'Origin': 'http://miring.b12x.org',
                    'X-Requested-With': 'XMLHttpRequest',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
                };
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('httpHeaderTransform', httpHeaderTransform);
    httpHeaderTransform.$inject = [];
}());