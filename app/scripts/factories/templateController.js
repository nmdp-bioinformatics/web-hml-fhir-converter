(function () {
    'use strict';

    function templateController () {
        var factory = {
            getControllerNameByTemplateUrl: function (templateUrl) {
                var urlArray = templateUrl.split('/');

                for (var i = 0; i < urlArray.length; i++) {
                    if (urlArray[i].length === 0) {
                        urlArray.split(i, 1);
                    }
                }

                var htmlFileName = urlArray[urlArray.length - 1],
                    dirtyControllerName = htmlFileName.split('.')[0],
                    htmlControllerName = '';

                for (var i = 0; i < dirtyControllerName.length; i++) {
                    if (htmlFileName[i] === '-') {
                        htmlControllerName += dirtyControllerName[i + 1].toUpperCase();
                        i++;
                    } else {
                        htmlControllerName += dirtyControllerName[i];
                    }
                }

                return {
                    controller: htmlControllerName,
                    controllerAs: htmlControllerName + 'Ctrl'
                };
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('templateController', templateController);
    templateController.$inject = [];
}());