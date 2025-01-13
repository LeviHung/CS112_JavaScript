"use strict";
/*    Levi Hung */
/*    Lab #24 */
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Levi Hung
      Date:   11/27/2024

      Filename: project12-01.js
*/

// Run once the page is loaded and ready
$( () => {

   // Show the dropdown menu during the mouseover event
   $("li.submenu").mouseover( e => {
      $(e.currentTarget).children("ul").show();
   });

   // Hide the dropdown menu during the mouseout event
   $("li.submenu").mouseout( e => {
      $(e.currentTarget).children("ul").hide();
   });
});



                                                