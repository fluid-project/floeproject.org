"use strict";
var hostName = window.location.host;
var hrefSymLink = document.getElementsByClassName("hreff");
for (var i = 0; i < hrefSymLink.length; i++) {
    var init = hrefSymLink[i].getAttribute("href");
    hrefSymLink[i].setAttribute("href", "http://" + hostName + init);
}
