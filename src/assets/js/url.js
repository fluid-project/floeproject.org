var pathName = window.location.pathname;
hostName= window.location.host;
console.log("HI");
console.log(hostName);
console.log(pathName);
var hrefSymLink = document.getElementsByClassName("hreff");
console.log(hrefSymLink);
console.log(hrefSymLink.length);
for (var i = 0; i < hrefSymLink.length; i++) {
    var init=hrefSymLink[i].getAttribute("href");
    hrefSymLink[i].setAttribute("href","http://"+hostName+init);
    console.log(hrefSymLink[i].getAttribute("href"));
  }
