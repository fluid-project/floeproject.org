/*
Copyright 2014 OCAD University
Copyright 2017 OCAD University
Copyright 2020 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global floe:true, fluid, jQuery*/

var floe = floe || {};

(function ($, fluid) {

    /**
     * Instantiate UI Options
     * @param path {String} The relative path to infusion library from the location of the web page within which UI Options is integrated.
     */
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
