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
        scrollTop: $("#bar-chart").offset().top-300
    }, 600);
});
$("#map-return-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-anchor").offset().top+180
    }, 600);
});


$("#explore").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav-anchor").offset().top+50
    }, 600);
});



$("#mini-forceplot").click(function() {
    $('html, body').animate({
        scrollTop: $("#force-layout-controls").offset().top-100
    }, 600);
});




$("#mini-stacked").click(function() {
    $('html, body').animate({
        scrollTop: $("#stacked-area-chart").offset().top-400
    }, 600);
});




SelectedCountry = function(_parentElement, _data1,_data2,_svgWidth,_svgHeight){
    this.parentElement = _parentElement;
    this.mapData = _data1;
    this.country_cuisine=_data2;
    this.svgWidth=_svgWidth;
    this.svgHeight=_svgHeight;

    this.initVis();
};


SelectedCountry.prototype.initVis = function() {

    var vis = this;

    vis.margin = {top: 10, right: 10, bottom: 10, left: 10};


    vis.width = vis.svgWidth - vis.margin.left - vis.margin.right;
    vis.height = vis.svgHeight - vis.margin.top - vis.margin.bottom;

};


SelectedCountry.prototype.wrangleData = function(country,cuisine) {

    var vis = this;

    vis.margin = {top: 10, right: 10, bottom: 10, left: 10};

    vis.width = vis.svgWidth - vis.margin.left - vis.margin.right;
    vis.height = vis.svgHeight - vis.margin.top - vis.margin.bottom;

};

SelectedCountry.prototype.updateVis = function(country,cuisine) {

};