/* eslint-env es6 */
"use strict";
module.exports = function w3cDate(value) {
    const dateObject = new Date(value);
    return dateObject.toISOString();
};