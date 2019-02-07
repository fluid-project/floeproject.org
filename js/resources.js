/*
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
      * @param elm {String} The selector of an element whose contents will be toggled
      * @param state {Boolean} True to toggle open, false to toggle closed
      */
    var toggleCategory = function (elm, state) {
        $(elm)
            .attr('aria-expanded', state)
            .closest('.floe-resources-category')
            .toggleClass('floe-resources-content-show', state);
    };

    /** When "show all" button is clicked, expands all categories to show their contents. */
    $('.flc-resources-showAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', true);
    });

    /** When "hide all" button is clicked, collapses all categories to hide their contents. */
    $('.flc-resources-hideAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', false);
    });

    /** Toggle each category to hide or show their respective content(s).
      * @param (evt) A jQuery event, happens each time the object is clicked
      */
    $('.flc-resources-toggleItem').click(function (evt) {
        var target = $(evt.delegateTarget);
        var state = target.attr('aria-expanded') === 'true' ? true : false;
        toggleCategory(target, !state);
        evt.preventDefault();
    });

});
