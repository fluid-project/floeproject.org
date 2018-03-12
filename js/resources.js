/*
Copyright 2014 OCAD University
Copyright 2018 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/*global $ */

$(document).ready(function () {

    'use strict';

    /** Shows or hides the contents of a category.
      * @param elm {String} The element (usually a class name) whose contents will be toggled
      * @param state {Boolean} The aria-expanded state will change each time the element is toggled
      */
    var toggleCategory = function (elm, state) {
        $(elm)
            .attr('aria-expanded', state)
            .closest('.floe-resources-category')
            .toggleClass('floe-resources-content-show', state);
    };

    /** When "expand all" button is clicked, expands all categories to show their contents. */
    $('.flc-resources-showAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', true);
    });

    /** When "show all" button is clicked, collapses all categories to hide their contents. */
    $('.flc-resources-hideAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', false);
    });

    /** Toggle each category to hide or show their respective content(s).
      * @param (evt) A jQuery event, happens each time the object is clicked
      */
    $('.flc-resources-toggleItem').click(function (evt) {
        var target = $(evt.delegateTarget); // Assign the event as the target to be acted upon
        var state = target.attr('aria-expanded') === 'true' ? true : false;
        toggleCategory(target, !state); // Pass in target as the element to be toggled
        evt.preventDefault();
    });

});
