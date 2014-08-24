/*globals console, window*/

var module = angular.module('bguiz.angular.parentmessager', []);

module.service('ParentMessagerService', function() {
    'use strict';
    var svc = this;
    svc.parent = window.parent;
    svc.targetOrigin = '*';
    svc.store = {};
    svc.send = function(msg) {
        svc.parent.postMessage(msg, svc.targetOrigin);
    };
    svc.receive = function(callback) {
        window.addEventListener('message', function(ev) {
            //accept based on ev.origin
            if (svc.targetOrigin === '*' || (ev.origin === svc.targetOrigin)) {
                callback(ev.data);
            }
        }, false);
    };
});
