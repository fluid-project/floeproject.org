/*
Copyright 2014 OCAD University

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

    floe.setupUIO = function (config) {

        // specifically for overriding the paths in the default UIO auxSchema
        fluid.defaults("floe.auxSchema", {
            auxiliarySchema: {
                // adjust paths
                templatePrefix: config.templatePrefix,
                messagePrefix: config.messagePrefix,
                tableOfContents: {
                    enactor: {
                        tocTemplate: config.tocTemplate
                    }
                },
                template: config.template,
            }
        });

        var prefsEditor = fluid.prefs.create(".flc-prefsEditor-separatedPanel", {
            build: {
                gradeNames: [
                    "fluid.prefs.auxSchema.starter",
                    "floe.auxSchema"
                ]
            }
        });
    };

})(jQuery, fluid);
