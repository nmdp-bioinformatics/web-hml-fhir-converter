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
        'autoAddOnNoResultsTimer': 2500,
        'defaultMaxQueryTypeahead': {
             number: 10, text: '10'
        },
        'propertiesParentMap': {
            'samplesParent': [
                { propertyString: 'samples', propertyIndex: -1, isArray: true },
                { propertyString: 'properties', propertyIndex: -1, isArray: true }
            ],
            'typingParent': [
                { propertyString: 'samples', propertyIndex: -1, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'properties', propertyIndex: -1, isArray: true }
            ],
            'ssoParent': [
                { propertyString: 'samples', propertyIndex: -1, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'sso', propertyIndex: -1, isArray: false },
                { propertyString: 'properties', propertyIndex: -1, isArray: true }
            ],
            'sspParent': [
                { propertyString: 'samples', propertyIndex: -1, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'ssp', propertyIndex: -1, isArray: false },
                { propertyString: 'properties', propertyIndex: -1, isArray: true }
            ],
            'sbtSangerParent': [
                { propertyString: 'samples', propertyIndex: -1, isArray: true },
                { propertyString: 'typing', propertyIndex: -1, isArray: false },
                { propertyString: 'sbtSanger', propertyIndex: -1, isArray: false },
                { propertyString: 'properties', propertyIndex: -1, isArray: true }
            ]
        },
        'samplePanels': {
            'collectionMethods': {
                'templateUrl': 'views/guided/hml/samples/collection-methods/collection-methods.html',
                'controller': 'collectionMethods',
                'controllerAs': 'collectionMethodsCtrl'
            },
            'properties': {
                'templateUrl': 'views/guided/hml/properties/properties.html',
                'controller': 'properties',
                'controllerAs': 'propertiesCtrl'
            },
            'typing': {
                'templateUrl': 'views/guided/hml/samples/typing/typing.html',
                'controller': 'typing',
                'controllerAs': 'typingCtrl'
            }
        },
        'typingPanels': {
            'properties': {
                'templateUrl': 'views/guided/hml/properties/properties.html',
                'controller': 'properties',
                'controllerAs': 'propertiesCtrl'
            },
            'alleleAssignment': {
                'templateUrl': 'views/guided/hml/samples/typing/allele-assignment/allele-assignment.html',
                'controller': 'alleleAssignment',
                'controllerAs': 'alleleAssignmentCtrl'
            },
            'typingMethod': {
                'templateUrl': 'views/guided/hml/samples/typing/typing-method/typing-method.html',
                'controller': 'typingMethod',
                'controllerAs': 'typingMethodCtrl'
            },
            'consensusSequence': {
                'templateUrl': 'views/guided/hml/samples/typing/consensus-sequence/consensus-sequence.html',
                'controller': 'consensusSequence',
                'controllerAs': 'consensusSequenceCtrl'
            }
        },
        'typingMethodPanels': {
            'sso': {
                'templateUrl': 'views/guided/hml/samples/typing/typing-method/sso/sso.html',
                'controller': 'sso',
                'controllerAs': 'ssoCtrl'
            },
            'ssp': {
                'templateUrl': 'views/guided/hml/samples/typing/typing-method/ssp/ssp.html',
                'controller': 'ssp',
                'controllerAs': 'sspCtrl'
            },
            'sbtSanger': {
                'templateUrl': 'views/guided/hml/samples/typing/typing-method/sbt-sanger/sbt-sanger.html',
                'controller': 'sbtSanger',
                'controllerAs': 'sbtSangerCtrl'
            }
        }
    };

    angular.module('hmlFhirAngularClientApp.constants').constant('appConfig', appConfig);
}());