/**
 * Created by abrown3 on 1/23/17.
 */
(function () {
    'use strict';

    function hmlAddEditMain($scope, hmlModel, edit, $uibModal, toaster, $q) {
       /* jshint validthis:true */
        var hmlAddEditMainCtrl = this;

        hmlAddEditMainCtrl.scope = $scope;
        hmlAddEditMainCtrl.hml = hmlModel;
        hmlAddEditMainCtrl.edit = edit;

        hmlAddEditMainCtrl.addReportingCenter = function (edit) {
            var titlePrefix = hmlAddEditMainCtrl.hml.reportingCenters.length > 0 ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Reporting Center', 'views/guided/hml/reporting-center/reporting-center.html', edit).then(function (result) {
                if (result) {
                    hmlAddEditMainCtrl.hml.reportingCenters = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed Reporting Center.'
                    });
                }
            });
        };

        hmlAddEditMainCtrl.addHmlId = function (edit) {
            var titlePrefix = hmlAddEditMainCtrl.hml.hmlId.id !== null ? 'Edit' : 'Add';
            openModal(titlePrefix + ' HML ID', 'views/guided/hml/hml-id/hml-id.html', edit).then(function (result) {
                if (result) {
                    hmlAddEditMainCtrl.hml.hmlId = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed HML ID.'
                    });
                }
            });
        };

        hmlAddEditMainCtrl.addTypingTestNames = function (edit) {
            var titlePrefix = hmlAddEditMainCtrl.hml.typingTestNames.length > 0 ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Typing Test Names', 'views/guided/hml/typing-test-names/typing-test-names.html', edit).then(function (result) {
                if (result) {
                    hmlAddEditMainCtrl.hml.typingTestNames = result;

                    toaster.pop({
                        type: 'info',
                        body: 'Successfully ' + titlePrefix.toLowerCase() + 'ed Typing Test Name(s).'
                    });
                }
            });
        };

        hmlAddEditMainCtrl.addSamples = function (edit) {
            var titlePrefix = hmlAddEditMainCtrl.hml.samples.length > 0 ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Samples', 'views/guided/hml/samples/samples.html', edit).then(function (result) {
                if (result) {
                    hmlAddEditMainCtrl.hml.samples.push(result);
                }
            });
        };

        hmlAddEditMainCtrl.addProperties = function (edit) {
            var titlePrefix = hmlAddEditMainCtrl.hml.properties.length > 0 ? 'Edit' : 'Add';
            openModal(titlePrefix + ' Properties', 'views/guided/hml/properties/properties.html', edit).then(function (result) {
                if (result) {
                    hmlAddEditMainCtrl.hml.properties.push(result);
                }
            });
        };

        function openModal (title, bodyTemplateUrl, edit) {
            var defer = $q.defer(),
                modalInstance = $uibModal.open({
                    animation: true,
                    controller: 'hmlModal',
                    controllerAs: 'hmlModalCtrl',
                    templateUrl: 'views/guided/hml/hml-modal.html',
                    resolve: {
                        title: function () {
                            return title;
                        },
                        bodyTemplateUrl: function () {
                            return bodyTemplateUrl;
                        },
                        hmlModel: function () {
                            return hmlAddEditMainCtrl.hml;
                        },
                        edit: function () {
                            return edit;
                        }
                    }
                });

            modalInstance.result.then(function (result) {
                defer.resolve(result);
            });

            return defer.promise;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlAddEditMain', hmlAddEditMain);
    hmlAddEditMain.$inject = ['$scope', 'hmlModel', 'edit', '$uibModal', 'toaster', '$q'];
}());