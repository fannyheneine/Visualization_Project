
// Will be used to the save the loaded JSON data
var data;
var ingchart;
// Date parser to convert strings to date objects


// Variables for the visualization instances
//var selection="American";


// Start application by loading the data
loadData_ingredientChart();

function loadData_ingredientChart() {
    d3.csv("data/all_cuisines_all_ing.csv", function (error, data) {

        console.log(selected_ingredient, color_ing)
        ingchart = new BarChart2("ingredient-chart",data ,500, "big");


    })
}





//function brushed() {
//
//	// TO-DO: React to 'brushed' event
//	// Set new domain if brush (user selection) is not empty
//	areachart.x.domain(
//		timeline.brush.empty() ? timeline.x.domain() : timeline.brush.extent()
//	);
//	// Update focus chart (detailed information)
//	areachart.updateVis();
//
//	filtered = true;
//
//
//}
//
