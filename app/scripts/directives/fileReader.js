/**
 * Created by abrown3 on 12/6/16.
 */
(function () {
    'use strict';

    angular.module('hmlFhirAngularClientApp.directives').directive('fileReader', fileReader);
    fileReader.$inject = ['$window'];

    function fileReader ($window) {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, el, attr, ctrl) {
                var fileReader = new $window.FileReader(),
                    fileType = {};

                fileReader.onload = function () {
                    ctrl.$setViewValue(fileReader.result);

                    if ('fileLoaded' in attr) {
                        scope.$eval(attr['fileLoaded']);
                    }
                };

                fileReader.onprogress = function (event) {
                    if ('fileProgress' in attr) {
                        scope.$eval(attr['fileProgress', {
                            '$total': event.total,
                            '$loaded': event.loaded
                        }]);
                    }
                };

                fileReader.onerror = function () {
                    if ('fileError' in attr) {
                        scope.$eval(attr['fileError', { '$error': fileReader.error }]);
                    }
                };

                fileType = attr['fileSelect'];

                el.bind('change', function (e) {
                    var fileName = e.target.files[0];

                    if (fileType === '' || fileType === 'text') {
                        fileReader.readAsText(fileName);
                    } else if (fileType === 'data') {
                        fileReader.readAsDataURL(fileName);
                    }
                });
            }
        };

        return directive;
    }
}());