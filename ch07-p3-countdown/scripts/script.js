"use strict";
/*    Levi Hung */
/*    Lab #14 */
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Levi Hung
      Date:   10/23/2024

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// Call the countdown function to display the current date and time immediately 
// after the window finishes loading
window.addEventListener("load", countdown);

// Use the setInterval() method to run the countdown() function every 1000 milliseconds
let countdownID = window.setInterval(countdown, 1000);

function countdown() 
{
   // Store within now variable the current date and time.
   let now = new Date();

   // Display the text of the current date and time in the currentTime object.
   currentTime.textContent = now.toLocaleString();
   
   let newYear = new Date("January 1, 2024");
   
   // Retrieve the 4-digit year value from the now variable, 
   // and increase that value by 1 to get the 4-digit year value of next year.
   let nextYear = now.getFullYear() + 1;

   // Change the year value of newYear to the value of the nextYear variable.
   newYear.setFullYear(nextYear);

   // Calculate the days left by calculating the difference between newYear and now
   let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);

   // Multiply the fractional part of the daysLeft variable by 24 to get the left hours
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // Multiply the fractional part of the hrsLeft variable by 60 to get the left minutes
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

   // Multiply the fractional part of the minsLeft variable by 60 to get the left seconds
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display the results in the web page clock
   daysLeftBox.textContent = Math.floor(daysLeft);
   hrsLeftBox.textContent  = Math.floor(hrsLeft);
   minsLeftBox.textContent = Math.floor(minsLeft);
   secsLeftBox.textContent = Math.floor(secsLeft);

   let word1 = "Alpha";
   let word2 = "Beta";

   let isValue = word1.localeCompare(word2);
   console.log(isValue);
}