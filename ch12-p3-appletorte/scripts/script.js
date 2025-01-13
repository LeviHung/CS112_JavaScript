"use strict";
/*    Levi Hung */
/*    Lab #25 */
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Levi Hung
      Date:   11/27/2024

      Filename: project12-03.js
*/

// Run once the page is loaded and ready
$( () => {
   $("article > h2").click( e => {
      // Declare the variables
      let heading = $(e.target);
      let list = $(heading.next());
      let headingImage = $(heading.children("img"));

      // Alternate between hiding and showing the content of the lists 
      $(list).slideToggle(500);

      // Change the symbol displayed in the headings
      if ($(headingImage).attr("src") === "image/plus.png") {
         $(headingImage).attr("src", "image/minus.png");
      } else {
         $(headingImage).attr("src", "image/plus.png");
      }
   })

   // Fix bug: + signs do not work.
   $("img.plus").click( e => {
      // Declare the variables
      let heading = $(e.target);
      let list = $(heading.parent().next());
      let headingImage = $(heading);

      // Alternate between hiding and showing the content of the lists 
      $(list).slideToggle(500);

      // Change the symbol displayed in the headings
      if ($(headingImage).attr("src") === "image/plus.png") {
         $(headingImage).attr("src", "image/minus.png");
      } else {
         $(headingImage).attr("src", "image/plus.png");
      }
   })
});

