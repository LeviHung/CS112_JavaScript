"use strict";
/*    Levi Hung */
/*    Lab #19 */
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
   // Test whether the cookie object exists for this page
   if (document.cookie) 
   {
      // Display the best time to the text content of the bestText object
      bestText.textContent = getBestTime() + " seconds";
   }
});

// Function to retrieve the user’s current best time to 
// solve the sliding block puzzle
function getBestTime() 
{
   if (document.cookie) 
   {
      // Convert the cookie value to an integer and return it
      let cookieArray = document.cookie.split("=");
      return parseInt(cookieArray[1]);
   }
   else
   {
      return 9999;
   }
}

// Function to replace the user’s best time with the time of 
// their recent attempt if that attempt was better
function updateRecord()
{
   let solutionTime = parseInt(document.getElementById("timer").value);
   let bestTime = getBestTime();
   
   // Change the bestTime to the solution time if this attempt is faster than 
   // the last best Time
   if (solutionTime < bestTime) 
   {
      bestTime = solutionTime;
   }

   // Change the text content of the bestText object
   bestText.textContent = bestTime + " seconds";

   // Write the bestTime to the document.cookie object and 
   // set the max age of the cookie to 90 days
   let maxAge = 60 * 60 * 24 * 90;
   document.cookie = "puzzle8Best=" + bestTime + ";max-age=" + maxAge;
}

