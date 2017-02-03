/**
 * Created by abrown3 on 1/23/17.
 */
(function () {
    'use strict';

    function objectModelFactory(hmlModelService, $q) {
        var factory = {
            getCollectionMethodModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('CollectionMethod').then(function (result) {
                   defer.resolve(result);
                });

                return defer.promise;
            },

            getExtendedItemModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('ExtendedItem').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getHmlModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('Hml').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getHmlIdModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('HmlId').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getProjectModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('Project').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getPropertyModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('Property').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getReportingCenterModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('ReportingCenter').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getSampleModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('Sample').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getTypingTestNameModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('TypingTestName').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getVersionModel: function () {
                var defer = $q.defer();

                hmlModelService.getModel('Version').then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            },

            getModelByName: function (modelName) {
                var defer = $q.defer(),
                    callback;

                switch (modelName) {
                    case 'collectionMethod':
                        callback = this.getCollectionMethodModel;
                        break;
                    case 'extendedItem':
                        callback = this.getExtendedItemModel;
                        break;
                    case 'hml':
                        callback = this.getHmlModel;
                        break;
                    case 'hmlId':
                        callback = this.getHmlIdModel;
                        break;
                    case 'project':
                        callback = this.getProjectModel;
                        break;
                    case 'property':
                        callback = this.getPropertyModel;
                        break;
                    case 'reportingCenter':
                        callback = this.getReportingCenterModel;
                        break;
                    case 'sample':
                        callback = this.getSampleModel;
                        break;
                    case 'typingTestName':
                        callback = this.getTypingTestNameModel;
                        break;
                    case 'version':
                        callback = this.getVersionModel;
                        break;
                    default:
                        defer.resolve({});
                }

                callback().then(function (result) {
                    defer.resolve(result);
                });

                return defer.promise;
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('objectModelFactory', objectModelFactory);
    objectModelFactory.$inject = ['hmlModelService', '$q'];
}());