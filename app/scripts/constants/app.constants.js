/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    var appConfig = {
        'miring_base_url': 'http://localhost:8080/MiringValidator/',
        'fhir_base_url': 'http://fhir.b12x.org/',
        'resource_server_base_url': 'http://localhost:8090/v1/',
        'hml': {
            'version': {
                'name': '1.0.1'
            }
        },
        'resultsPerPage': [
            { number: 5, text: '5' },
            { number: 10, text: '10' },
            { number: 25, text: '25' },
            { number: 50, text: '50' },
            { number: 100, text: '100' }
        ],
        'autoAddOnNoResults' : true,
        'autoAddOnNoResultsTimer': 2500
    };

    angular.module('hmlFhirAngularClientApp.constants').constant('appConfig', appConfig);
}());