/*
Copyright 2018-2021 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/main/Infusion-LICENSE.txt
*/

"use strict";

const menu = {};

$(document).ready(function () {

    var toggleCategory = function (elm, state) {
        $(elm)
            .attr("aria-expanded", state)
            .closest(".floe-resources-category")
            .toggleClass("floe-resources-content-show", state);
    };
    /** When "show all" button is clicked, expands all categories to show their contents. */
    $(".flc-resources-showAll").click(function () {
        toggleCategory(".flc-resources-toggleItem", true);
    });
    /** When "hide all" button is clicked, collapses all categories to hide their contents. */
    $(".flc-resources-hideAll").click(function () {
        toggleCategory(".flc-resources-toggleItem", false);
    });
    $(".flc-resources-toggleItem").click(function (evt) {
        var target = $(evt.delegateTarget);
        var state = target.attr("aria-expanded") === "true" ? true : false;
        toggleCategory(target, !state);
        evt.preventDefault();
    });
});

/**
 * Toggles the aria-expanded state of an element.
 *
 * @param {DOMNode} element - the DOM Node to toggle the aria-expanded state on.
 * @param {Boolean} [state] - (optional) explicit state to set aria-expanded to.
 */
menu.toggleExpansion = (element, state) => {
    let isExpanded = element.getAttribute("aria-expanded") === "true" ? true : false;
    state = typeof(state) !== "undefined" ? state : !isExpanded;

    element.setAttribute("aria-expanded", state ? "true" : "false");
};

/**
 * Initializes a menu widget.
 *
 * @param {String} container - A CSS selector for the menu's container.
 * @param {String} [button] - (optional) A CSS slector for the menu's button. Defaults to "button".
 * @throws {Exception} - if no element is found for the container selector.
 * @throws {Exception} - if no element is found for the button selector within the container element.
 */
menu.init = (container, button = "button") => {
    let menuContainer = document.querySelector(container);

    if (!menuContainer) {
        throw new Error(`No element found for container selector: ${container}`);
    }

    let btn = menuContainer.querySelector(button);

    if (!btn) {
        throw new Error(`No element found for button selector: ${button}`);
    }

    // Close the menu when focus is moved away from the menu
    menuContainer.addEventListener("focusout", (event) => {
        if (!menuContainer.contains(event.relatedTarget)) {
            menu.toggleExpansion(btn, false);
        }
    });

    // Close the menu when clicking outside of it.
    // This is needed due to Safari not applying focus to clicked inputs.
    // https://bugs.webkit.org/show_bug.cgi?id=22261
    document.body.addEventListener("click", (event) => {
        if (!menuContainer.contains(event.target)) {
            menu.toggleExpansion(btn, false);
        }
    });

    // Close the menu when the "Escape" key is pressed and the menu has focus. Shifts focus back to the button.
    menuContainer.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
            menu.toggleExpansion(btn, false);
            btn.focus();
        }
    });

    // Toggle expansion of menu when button is clicked
    btn.addEventListener("click", () => {
        menu.toggleExpansion(btn);
    });
};

// initialize the mobile navigation menu
menu.init(".site-nav");
