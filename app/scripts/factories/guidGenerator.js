/**
 * Created by abrown3 on 12/19/16.
 */
(function () {
    'use strict';

    function guidGenerator () {
        var factory = {
            generateRandomGuid: function () {
                /* jshint ignore:start */
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r&0x3 | 0x8);
                    return v.toString(16);
                });
                /* jshint ignore:end */
            }
        };

        return factory;
    }

    angular.module('hmlFhirAngularClientApp.factories').factory('guidGenerator', guidGenerator);
    guidGenerator.$inject = [];
}());