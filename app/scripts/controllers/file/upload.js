/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function upload ($scope, files, $uibModalInstance, uploadService) {
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
            var xmlHml = [],
                reader = new FileReader();

            reader.onload = function (f) {
                var fileXml= f.target.result;
                xmlHml.push({ xml: fileXml });

                if (xmlHml.length === files.length) {
                    for (var j = 0; j < xmlHml.length; j++) {
                        uploadService.uploadFileToServer(xmlHml[j]);
                    }
                }
            };

            for (var i = 0; i < files.length; i++) {
                reader.readAsText(files[i]);
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('upload', upload);
    upload.$inject = ['$scope', 'files', '$uibModalInstance', 'uploadService'];
}());