/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.
*/

// Declare dependencies
/*global fluid */
"use strict";
var floe = floe || {};
(function ($, fluid) {

    floe.setupUIO = function (path) {
        path = path || "";
        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            terms: {
                "templatePrefix": path + "lib/infusion/src/framework/preferences/html",
                "messagePrefix": path + "lib/infusion/src/framework/preferences/messages"
            },
            "tocTemplate": path + "lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
            "tocMessage": path + "lib/infusion/src/framework/preferences/messages/tableOfContents-enactor.json"
        });
    };
})(jQuery, fluid);
