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
        scrollTop: $("#barcharts").offset().top-220
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
        scrollTop: $("#stacked-area-chart").offset().top-180
    }, 600);
});




SelectedCountry = function(_parentElement, _data1,_data2,_svgWidth,_svgHeight){
    this.parentElement = _parentElement;
    this.mapData = _data1;
    this.country_cuisine=_data2;
    console.log(this.country_cuisine)
    this.svgWidth=_svgWidth;
    this.svgHeight=_svgHeight;
    this.mapCountries= topojson.feature(this.mapData, this.mapData.objects.countries).features;
    console.log(this.mapCountries)
    this.initVis();
};


SelectedCountry.prototype.initVis = function() {

    var vis = this;

    vis.margin = {top: 10, right: 10, bottom: 10, left: 10};


    vis.width = vis.svgWidth - vis.margin.left - vis.margin.right;
    vis.height = vis.svgHeight - vis.margin.top - vis.margin.bottom;

    vis.svg = d3.select("#" + vis.parentElement).append("svg")
        .attr("width", vis.width + vis.margin.left + vis.margin.right)
        .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

    vis.map_projection = d3.geo.mercator()
        .center([10, 50])
        .scale(vis.svgWidth / 2/ Math.PI)
        .translate([vis.svgWidth / 2, vis.svgHeight / 2]);

    vis.map_path = d3.geo.path()
        .projection(vis.map_projection);

vis.wrangleData("American")
};


SelectedCountry.prototype.wrangleData = function(cuisine) {

    var vis = this;

    vis.updateVis()

};

SelectedCountry.prototype.updateVis = function() {
var vis=this;

    vis.countries=vis.svg.selectAll("countries")
        .data(vis.mapCountries);

    vis.countries.enter().insert("path", ".graticule")
        .attr("class", "countries")
        .attr("d", vis.map_path)
        .attr("fill", "black");
};