DISCOVERING THE CUISINES OF THE WORLD
by Isadora Nun, Jack Qian, Fanny Heneine and Lulu Liu

URL to the website: http://fannyheneine.github.io/Visualization_Project/

URL to the screencast: https://www.youtube.com/watch?v=p3im5ZoMShc

URL to the github repository: https://github.com/fannyheneine/Visualization_Project


Interactions:
The map is interactive with all other visualizations: When you click on the map, all visualizations update. You can jump to any visualization using the navigation bar (the small icons in the navigation bar also update). The bar chart are also interactive with each other: if you click on an ingredient, we can see its occurrences in cuisines. Clicking again on a bar of a specific cuisine, the occurrences of ingredients in that specific cuisine update. 
Watch the recipe data self-organize in a link-nodes diagram.  You may choose to explore individual recipes and their relation to each other or individual ingredients.  In Recipes view, each recipe is pictured as a separate node.  Each recipe is linked to other recipes by the number of shared ingredients.  The closer the nodes and clustered, the more ingredients they have in common.  Hover a node to see its cuisine of origin as well as its nearest neighbors.  Click the node to explore the intersecting ingredients with neighboring nodes.  Refresh the data for a new set of randomly chosen recipes from our data set.

In ingredient view the opposite is true.  Each node is a specific ingredient, which is now linked to every other ingredient by the number of recipes in which they both appear.  Hover each ingredient to see the cuisines in which this ingredient appears.  Click the node to explore what ingredients are commonly used together.

Like the rest of our website, this visualization may be filtered to look at data specific to a cuisine.  Do this by either clicking on the cuisine in the legend or by clicking on a region on the map.  To look at all cuisines again, click "Clear Filters".

The code files are:
"js/map.js" "js/main_map.js” 
"js/main-force.js" 
"js/forceDiagram.js" 
"js/main_barchart.js" 
"js/barchart.js" 
"js/main_barchart2.js" 
"js/barchart2.js" 
"js/stackedAreaChart.js" 
"js/timeline.js" 
"js/main_stacked2.js"

The loaded libraries are:
"js/jquery.min.js"
"js/bootstrap.min.js" "js/d3.min.js"
"js/d3.tip.js"
"js/underscore-min.js"
"js/nv.d3.js">
"js/d3-legend.min.js"
"js/colorbrewer.js"
"js/queue.v1.min.js"
"js/topojson.v1.min.js"
"js/navigation.js"



