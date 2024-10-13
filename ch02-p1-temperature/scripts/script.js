/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Levi Hung
      Date:   10/12/2024

      Filename: project02-01.js
 */
document.getElementById("fValue").onchange = function () {
      fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
   };
      
document.getElementById("cValue").onchange = function () {
      cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
   };
         
/*    // use event listeners
document.getElementById("fValue").addEventListener("change", 
   function () {
      document.getElementById("cValue").value = 
               FahrenheitToCelsius(document.getElementById("fValue").value);
   });

document.getElementById("cValue").addEventListener("change", 
   function () {
      document.getElementById("fValue").value = 
               CelsiusToFahrenheit(document.getElementById("cValue").value);
   });
*/   
function FahrenheitToCelsius(degree) 
{
   return (degree - 32) * 5 / 9;
}

function CelsiusToFahrenheit(degree) 
{
   return degree * 9 / 5  + 32;
}
