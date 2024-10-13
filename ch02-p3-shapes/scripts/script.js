/*    Levi Hung 
      Lab #3      
*/
/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Levi Hung
      Date:   09/12/2024

      Filename: project02-03.js
 */

/* Attach an onmouseover event handler to the element with the id "square".
   Use an anonymous function to response the handler event to change
   the innerHTML property of the element with the id "feedback" about displaying the string.
*/
document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square"
}

/* Attach an onmouseout event handler to the element with the id "square".
   Use an anonymous function to response the handler event to change
   the innerHTML property of the element with the id "feedback" about cleaㄐing the string.
*/
document.getElementById("square").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}

/*  Deal with the triangle part the same as the square. */
document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle"
}

document.getElementById("triangle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}

/*  Deal with the circle part the same as the square. */
document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle"
}

document.getElementById("circle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}

/*  // use named functions
document.getElementById("circle").onmouseover = overCircleMsg;
document.getElementById("circle").onmouseout = outCircleMsg;

function overCircleMsg() {
   document.getElementById("feedback").innerHTML = "You're hovering over the circle";
}

function outCircleMsg() {
   document.getElementById("feedback").innerHTML = "";
}
*/