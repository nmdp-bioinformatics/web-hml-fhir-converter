/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function upload ($scope, files) {
        /*jshint validthis: true */
        var uploadCtrl = this;

        uploadCtrl.files = addUploadedBytesToFiles(files);
        uploadCtrl.scope = $scope;

        function addUploadedBytesToFiles (files) {
            for (var i = 0; i < files.length; i++) {
                files[i].uploadedBytes = 0;
                files[i].percentageUploaded = 0;
            }

            return files;
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('upload', upload);
    upload.$inject = ['$scope', 'files'];
}());