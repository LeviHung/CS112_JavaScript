"use strict";
/*    Levi Hung */
/*    Lab #18 */
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Levi Hung
      Date:   11/04/2024

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

// Check the object exists
if (localStorage.sbloggerVisit) 
{
   // Retrieve the value of the sbloggerVisit key from local storage
   let storedLastDate = localStorage.getItem("sbloggerVisit");

   // Display the date of the user's last visit
   lastVisitDate.textContent = storedLastDate;

   // Store the date of the user's last visit using a Date object to a lastDate
   let lastDate = new Date(storedLastDate);

   // Iterate through each item in the articleDates collection to 
   // checkt the date of each article was posted after the user's last visit
   for (let item of articleDates) 
   {
      let articleDate = new Date(item.textContent);
      if (articleDate > lastDate) {
         // Mark with the text string “New” after the date and time of the article
         let newInfo = "<strong>new</strong>";
         item.insertAdjacentHTML("beforeEnd", newInfo);
      }
   }
} 
else 
{
   // This is the first time the user visits the website
   lastVisitDate.textContent = "Welcome to SBlogger!";

   // Mark with the text string "New" to all articles
   for (let item of articleDates) 
   { 
      let newInfo = "<strong>new</strong>";
      item.insertAdjacentHTML("beforeEnd", newInfo);
   }
}

// Update the stored date value in the sbloggerVisit key
let currentDate = new Date("9/12/2024");

// Store the date string in sbloggerVisit key of local storage
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());