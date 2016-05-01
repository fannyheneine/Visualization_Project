function nav_relocate() {
    var window_top = $(window).scrollTop();
    //console.log(window_top)
    var div_top = $('#nav-anchor').offset().top;
    //console.log(div_top)
    if (window_top > div_top) {
        $('#navigation-horizontal-bar').addClass('stick');
        $('#nav-anchor').height($('#navigation-horizontal-bar').outerHeight());
    } else {
        $('#navigation-horizontal-bar').removeClass('stick');
        $('#nav-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(nav_relocate);
    //console.log("hi")
    nav_relocate();
});


$("#mini-barchart").click(function() {
    $('html, body').animate({
        scrollTop: $("#bar-chart").offset().top-200
    }, 1000);
});



$("#mini-forceplot").click(function() {
    $('html, body').animate({
        scrollTop: $("#force-layout-controls").offset().top-100
    }, 1000);
});




$("#mini-stacked").click(function() {
    $('html, body').animate({
        scrollTop: $("#stacked-area-chart").offset().top-200
    }, 1000);
});