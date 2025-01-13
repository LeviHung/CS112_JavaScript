"use strict";
/*    Levi Hung */
/*    Lab #22 */
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Levi Hung
      Date:   11/21/2024

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
   let dateStr = dateBox.value;
   const url = "https://api.nasa.gov/planetary/apod";
   const key = "DEMO_KEY";

   // Use the fetch method to make a request to the url
   fetch (`${url}?api_key=${key}&date=${dateStr}`)
   .then (response => response.json())
   .then (obj => showPicture(obj))
   .catch (error => console.log(error));
   // Display the text of the rejected promise in the debugger console
}

// The function changes the innerHTML of the imageBox element to
// the video, image, or text string
function showPicture(json) {
   if (json.media_type === "video") {
      imageBox.innerHTML = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}`;

   } else if (json.media_type === "image") {
      imageBox.innerHTML = `<img src="${json.url}"/><h1>${json.title}</h1><p>${json.explanation}`;
   } else {
      imageBox.innerHTML = "Image not Avaliable";
   }
}



