/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    function xmlConverter () {
        var factory = {
            parseXmlToJson: function (xml) {
                var json = {};

                try {
                    var converter = new X2JS(),
                        json = converter.xml_str2json(xml);

                    return json;
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
    xmlConverter.$inject = [];
}());