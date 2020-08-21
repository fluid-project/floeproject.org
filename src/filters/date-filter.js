/* eslint-env es6 */
"use strict";
module.exports = function dateFilter(value) {
    const dateObject = new Date(value);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWithSuffix = dateObject.getUTCDate();
    var temp1 = `${months[dateObject.getMonth()]}`;
    var temp2 = ` ${dayWithSuffix}`;
    var temp3 = ` ${dateObject.getFullYear()}`;
    return temp1 + temp2 + "," + temp3;
};
