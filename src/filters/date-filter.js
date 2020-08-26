/* eslint-env es6 */
"use strict";
module.exports = function dateFilter(value) {
    const dateObject = new Date(value);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWithSuffix = dateObject.getUTCDate();
    var month = `${months[dateObject.getMonth()]}`;
    var day = ` ${dayWithSuffix}`;
    var year = ` ${dateObject.getFullYear()}`;
    return month + day + "," + year;
};
