/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    var appConfig = {
        'miring_base_url': 'http://miring.b12x.org/',
        'fhir_base_url': 'http://fhir.b12x.org/'
    };

    angular.module('hmlFhirAngularClientApp.constants').constant('appConfig', appConfig);
}());