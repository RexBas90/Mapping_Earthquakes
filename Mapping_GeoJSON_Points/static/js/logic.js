// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RexBas90/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/js/majorAirports.json";

d3.json(airportData).then(function(data){
  L.geoJson(data,{
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3> Airport code: " + features.properties.faa + "</h3> <hr> <h4>Airport name: " + features.properties.name + "</h4>")
    }
  }).addTo(map);
});