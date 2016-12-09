/**
 * Created by abrown3 on 12/9/16.
 */
(function () {
    'use strict';

    var config = {
        'miring.base.url': 'http://miring.b12x.org/',
        'fhir.base.url': 'http://fhir.b12x.org/'
    };

    angular.module('hmlFhirAngularClientApp.constants').constant('app_config', config);
}());