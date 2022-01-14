/*
Copyright 2018-2021 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/main/Infusion-LICENSE.txt
*/

"use strict";

const card = {};

card.init = function (selector) {
    let cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            let link = card.querySelector("a");

            if (link) {
                link.click();
            }
        });
    });
};

card.init(".card-layout");
