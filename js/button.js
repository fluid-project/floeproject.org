$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#backtoTop').fadeIn();
    } else {
        $('#backtoTop').fadeOut();
    }
});
$(document).ready(function() {
    $("#backtoTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "medium");
        return false;
    });

});