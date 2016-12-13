/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    var appConfig = {
        //'miring_base_url': 'http://miring.b12x.org/',
        'miring_base_url': 'http://localhost:8080/MiringValidator/',
        'fhir_base_url': 'http://fhir.b12x.org/',
        'hml': {
            'version': '1.0.1',
            'versions': [
                '0.2',
                '0.3',
                '0.3.3',
                '1.0',
                '1.0.1',
                '1.0.2'
            ]
        }
    };

    angular.module('hmlFhirAngularClientApp.constants').constant('appConfig', appConfig);
}());