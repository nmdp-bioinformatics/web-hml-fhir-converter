/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function upload ($scope, files, $uibModalInstance, uploadService, xmlConverter) {
        /*jshint validthis: true */
        var uploadCtrl = this;

        uploadCtrl.files = addUploadedBytesToFiles(files);
        uploadCtrl.scope = $scope;

        uploadCtrl.cancel = function () {
            $uibModalInstance.cancel();
        };

        uploadCtrl.close = function () {
            $uibModalInstance.close();
        };

        function addUploadedBytesToFiles (files) {
            for (var i = 0; i < files.length; i++) {
                files[i].uploadedBytes = 0;
                files[i].percentageUploaded = 0;
            }

            sendFilesForUpload(files);

            return files;
        }

        function sendFilesForUpload (files) {
            var jsonHmlObjects = [];

            for (var i = 0; i < files.length; i++) {
                jsonHmlObjects.push(xmlConverter.parseXmlToJson('<h>4</h>'));
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('upload', upload);
    upload.$inject = ['$scope', 'files', '$uibModalInstance', 'uploadService', 'xmlConverter'];
}());