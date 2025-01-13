"use strict";
/*  Levi Hung */
/*  Lab #21 */
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Levi Hung
    Date:   11/14/2024

    Filename: project10-03.js
*/


async function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   

   // Set up direction service and rendering
   let bikeFind = new google.maps.DirectionsService();
   let bikeDraw = new google.maps.DirectionsRenderer();

   let Boulder = {
       lat: 40.01753,
       lng: -105.26496
   }

   // Create a map to Boulder
   let myMap = new google.maps.Map(bikeMap, {
       zoom: 12,
       center: Boulder,

   })

   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);

   function drawRoute() {
        if (startingPoint.selectedIndex !== 0 && 
            endingPoint.selectedIndex !== 0) 
        {
           // Ride a bike from startingPoint to endingPoint     
           let bikeRoute = {
              origin: startingPoint.value,
              destination: endingPoint.value,
              travelMode: "BICYCLING"
           }

           // Generate directions for the bike route
           bikeFind.route(bikeRoute, function(result, status) {
              if (status == "OK") {
                bikeDraw.setDirections(result);

                // Display route and directions
                bikeDraw.setMap(myMap);
                bikeDraw.setPanel(bikeDirections);
              } else {
                bikeDirections.textContent = "Directions Unavailable: " + status
              }
           });
        } 
   }
   
} 


