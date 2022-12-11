// Add console.log to check to see if our code is working.
console.log("working");

// assign data from cities.js to variable
let cityData = cities; 

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  [42.5236, -71.1030],
  [42.7284, -73.6918],
  [55.7635, 12.4949],
  [42.7284, -73.6918],
  [44.5263, -109.0565],
  [30.4213, -87.2169],
  [42.2793, -71.4162],
  [42.3876, -71.0995],
  [29.7604, -95.3698]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  opacity: 0.5,
  weight: 4,
  dashArray: '5,10'
}).addTo(map);


line.forEach(function(place) {
  L.marker(place).addTo(map)
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);