/*global $ */

$(document).ready(function () {

    'use strict';
    var toggleCategory = function (elm, state) {
        $(elm)
            .attr('aria-expanded', state)
            .closest('.floe-resources-category')
            .toggleClass('floe-resources-content-show', state);
    };

    // Expand all
    $('.flc-resources-showAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', true);
    });

    // Hide all
    $('.flc-resources-hideAll').click(function () {
        toggleCategory('.flc-resources-toggleItem', false);
    });

    // Toggle each category to show content
    $('.flc-resources-toggleItem').click(function (evt) {
        var target = $(evt.delegateTarget);
        var state = target.attr('aria-expanded') === 'true' ? true : false;
        toggleCategory(target, !state);
        evt.preventDefault();
    });

});
