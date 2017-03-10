/**
 * Created by abrown3 on 3/8/17.
 */
(function () {
    'use strict';

    function modelAddEditWrapper () {
        return {
            restrict: 'E',
            scope: {
                templateUrl: '@',
                controllerAsName: '@',
                modelName: '=',
                model: '='
            },
            link: function (scope, element, attrs) {
                scope.contentUrl = attrs.templateUrl;
                scope.controllerAsName = attrs.controllerAsName;
                scope.disabled = true;
                scope.edit = false;
            },
            template: '<div data-ng-include="contentUrl" data-ng-controller="modelAddEditWrapperCtrl as controllerAsName"></div>',
        };
    }

    angular.module('hmlFhirAngularClientApp.directives').directive('modelAddEditWrapper', modelAddEditWrapper);
    modelAddEditWrapper.$inject = [];
}());