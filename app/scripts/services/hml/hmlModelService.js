/**
 * Created by abrown3 on 1/23/17.
 */
(function () {
    'use strict';

    function hmlModelService($http, $q, appConfig, httpHeaderTransform) {
        var service = {
            getModel: function (modelName) {
                var url = '',
                    defer = $q.defer(),
                    headers = httpHeaderTransform.getHeaderForResourceServer();

                switch (modelName) {
                    case 'CollectionMethod':
                        url = getCollectionMethodModelUrl();
                        break;
                    case 'ExtendedItem':
                        url = getExtendedItemModelUrl();
                        break;
                    case 'Hml':
                        url = getHmlModelUrl();
                        break;
                    case 'HmlId':
                        url = getHmlIdModelUrl();
                        break;
                    case 'Project':
                        url = getProjectModelUrl();
                        break;
                    case 'Property':
                        url = getPropertyModelUrl();
                        break;
                    case 'ReportingCenter':
                        url = getReportingCenterModelUrl();
                        break;
                    case 'Sample':
                        url = getSampleModelUrl();
                        break;
                    case 'TypingTestName':
                        url = getTypingTestNameModelUrl();
                        break;
                    case 'Version':
                        url = getVersionModelUrl();
                        break;
                    case 'Typing':
                        url = getTypingModelUrl();
                        break;
                    default:
                        return;
                }

                $http({
                   method: 'GET',
                   url: url,
                   headers: headers
                }).success(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            }
        };

        function getCollectionMethodModelUrl () {
            return appConfig.resource_server_base_url + 'collectionMethod';
        }

        function getExtendedItemModelUrl () {
            return appConfig.resource_server_base_url + 'extendedItem';
        }

        function getHmlModelUrl () {
            return appConfig.resource_server_base_url + 'hml';
        }

        function getHmlIdModelUrl () {
            return appConfig.resource_server_base_url + 'hmlId';
        }

        function getProjectModelUrl () {
            return appConfig.resource_server_base_url + 'project';
        }

        function getPropertyModelUrl () {
            return appConfig.resource_server_base_url + 'property';
        }

        function getReportingCenterModelUrl () {
            return appConfig.resource_server_base_url + 'reportingCenter';
        }

        function getSampleModelUrl () {
            return appConfig.resource_server_base_url + 'sample';
        }

        function getTypingTestNameModelUrl () {
            return appConfig.resource_server_base_url + 'typingTestName';
        }

        function getVersionModelUrl() {
            return appConfig.resource_server_base_url + 'version';
        }

        function getTypingModelUrl() {
            return appConfig.resource_server_base_url + 'typing';
        }

        return service;
    }

    angular.module('hmlFhirAngularClientApp.services').service('hmlModelService', hmlModelService);
    hmlModelService.$inject = ['$http', '$q', 'appConfig', 'httpHeaderTransform']
}());