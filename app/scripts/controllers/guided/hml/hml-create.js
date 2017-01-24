/**
 * Created by abrown3 on 1/24/17.
 */
(function () {
    'use strict';

    function hmlCreate ($scope, hml, title, $uibModalInstance, hmlService, projectService, versions) {
        /* jshint validthis: true */
        var hmlCreateCtrl = this;

        hmlCreateCtrl.scope = $scope;
        hmlCreateCtrl.hml = hml;
        hmlCreateCtrl.title = title;
        hmlCreateCtrl.formSubmitted = false;
        hmlCreateCtrl.versions = versions;

        hmlCreateCtrl.cancel = function () {
            $uibModalInstance.dismiss();
        };

        hmlCreateCtrl.close = function () {
            $uibModalInstance.close();
        };

        hmlCreateCtrl.create = function () {

        };
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('hmlCreate', hmlCreate);
    hmlCreate.$inject = ['$scope', 'hml', 'title', '$uibModalInstance', 'hmlService', 'projectService', 'versions'];
}());