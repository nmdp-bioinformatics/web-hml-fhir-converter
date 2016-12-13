/**
 * Created by abrown3 on 12/8/16.
 */
(function () {
    'use strict';

    function upload ($scope, files, $uibModal, $uibModalInstance, uploadService, toaster, $location) {
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

        uploadCtrl.displayMiringWarnings = function (warnings, file) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/guided/hml-validation-warnings.html',
                controller: 'hmlValidationWarnings',
                controllerAs: 'hmlValidationWarningsCtrl',
                resolve: {
                    warnings: function () {
                        return warnings;
                    },
                    file: function () {
                        return file;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    for (var i = 0; i < uploadCtrl.files.length; i++) {
                        if (uploadCtrl.files[i].name === result.name &&
                            uploadCtrl.files[i].lastModified === result.lastModified) {
                            uploadCtrl.files.splice(i, 1);
                        }
                    }

                    if (uploadCtrl.files.length === 0) {
                        toaster.pop({
                            type: 'info',
                            body: 'You have no more files left to convert, dismiss this notification to navigate home.',
                            onHideCallback: function () {
                                $uibModalInstance.close();
                                $location.path('/');
                            }
                        });
                    }
                }
            });
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
            var parsedFiles = [];

            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader();

                reader.fileObj = files[i];

                reader.onload = function (f) {
                    reader.fileObj.xml = f.target.result;
                    parsedFiles.push(reader.fileObj);

                    if (parsedFiles.length === files.length) {
                        for (var j = 0; j < parsedFiles.length; j++) {
                            uploadService.uploadFileToServer(parsedFiles[j]);
                        }
                    }
                };

                reader.readAsText(files[i]);
            }
        }
    }

    angular.module('hmlFhirAngularClientApp.controllers').controller('upload', upload);
    upload.$inject = ['$scope', 'files', '$uibModal', '$uibModalInstance', 'uploadService', 'toaster', '$location'];
}());