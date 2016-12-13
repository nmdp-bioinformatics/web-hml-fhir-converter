/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    function xmlConverter (ngXml2json) {
        var factory = {
            parseXmlToJson: function (xml) {
                var json = {};

                try {
                    json = ngXml2json.parser(xml);
                } catch (exception) {
                    return 'Error validating HML xml: ' + exception;
                }

                return json;
            },

            validateXml: function (xml) {
                var parser = new DOMParser(),
                    oDomXml = parser.parseFromString(xml, 'text/xml');

                return oDomXml;
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('xmlConverter', xmlConverter);
    xmlConverter.$inject = ['ngXml2json'];
}());