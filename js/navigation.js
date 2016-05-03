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
    this.svgWidth=_svgWidth;
    this.svgHeight=_svgHeight;
    this.mapCountries= topojson.feature(this.mapData, this.mapData.objects.countries).features;


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




    vis.CountriesByCuisine={};

    for (var country_number in vis.country_cuisine){
        var key=vis.country_cuisine[country_number].cuisine;
        if (key in vis.CountriesByCuisine){
            vis.CountriesByCuisine[key].push(country_number);
        } else {
            vis.CountriesByCuisine[key]=[];
            vis.CountriesByCuisine[key].push(country_number);
        }
            }


vis.wrangleData("American");
};


SelectedCountry.prototype.wrangleData = function(cuisine) {

    var vis = this;


    vis.filteredMapData=vis.mapCountries.filter(function(d){
        var found = $.inArray(d.id.toString(), vis.CountriesByCuisine[cuisine]) > -1;
        return found
    });



    vis.updateVis()

};

SelectedCountry.prototype.updateVis = function() {
var vis=this;


    vis.map_projection = d3.geo.mercator()
        .center([10, 50])
        .scale(1)
        .translate([0,0]);

    vis.map_path = d3.geo.path()
        .projection(vis.map_projection);

    function boundingExtent(features) {
        var boundExtent = [[0,0],[0,0]];
        for (var x in features) {
            var thisBounds = vis.map_path.bounds(features[x]);
            boundExtent[0][0] = Math.min(thisBounds[0][0],boundExtent[0][0]);
            boundExtent[0][1] = Math.min(thisBounds[0][1],boundExtent[0][1]);
            boundExtent[1][0] = Math.max(thisBounds[1][0],boundExtent[1][0]);
            boundExtent[1][1] = Math.max(thisBounds[1][1],boundExtent[1][1]);
        }
        return boundExtent;
    }


    var b=boundingExtent(vis.filteredMapData);

    b.s = b[0][1]; b.n = b[1][1];
    b.w = b[0][0]; b.e = b[1][0];
    b.height = Math.abs(b.n - b.s);

    b.width = Math.abs(b.e - b.w);
    console.log(b.height)
    console.log(b.width)
    var s = 1 / Math.max(b.width / vis.width, b.height / vis.height);
    console.log(s)
    console.log(vis.width)
    console.log(vis.height)
    var t = [(vis.width - s * (b[1][0] + b[0][0])) / 2, (vis.height - s * (b[1][1] + b[0][1])) / 2];

    vis.map_projection
        .translate(t)
        .scale(s);


    vis.map_path_zoomed = d3.geo.path()
        .projection(vis.map_projection);


    vis.countries=vis.svg.selectAll(".selected-countries-on-map")
        .data(vis.filteredMapData,function(d){return d.id;});

    vis.countries.exit().remove();


    vis.countries.enter().insert("path", ".graticule")
        .attr("class", "selected-countries-on-map")
        .attr("stroke","#fff")
        .attr("fill","#8A9DA4")
        .attr("stroke-width",1);

    vis.countries
        .attr("d", vis.map_path_zoomed);


};