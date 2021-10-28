/* eslint-env es6 */
"use strict";
module.exports = function dateFilter(value) {
    const dateObject = new Date(value);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[dateObject.getMonth()]} ${dateObject.getUTCDate()}, ${dateObject.getFullYear()}`;
};
