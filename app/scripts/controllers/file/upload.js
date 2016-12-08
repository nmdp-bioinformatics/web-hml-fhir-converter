/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function upload ($scope, files) {
        /*jshint validthis: true */
        var uploadCtrl = this;

        uploadCtrl.files = files;
        uploadCtrl.scope = $scope;
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('upload', upload);
    upload.$inject = ['$scope', 'files'];
}());