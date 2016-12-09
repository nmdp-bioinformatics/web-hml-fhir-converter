/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    function xmlConverter (ngXml2json) {
        var factory = {
            parseXmlToJson: function (xml) {
                return ngXml2json.parser(xml);
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('xmlConverter', xmlConverter);
    xmlConverter.$inject = ['ngXml2json'];
}());