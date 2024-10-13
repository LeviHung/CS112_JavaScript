/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Levi Hung
      Date:   10/13/2024

      Filename: project02-04.js
 */
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95; 
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95; 
const SALES_TAX = 0.07;

document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

/* // use window's event listener when loading and changing
window.addEventListener("load", calcTotal);

window.addEventListener("change", calcTotal);
*/
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;
   
   // use comparsion operator
   if (buyChicken == true) {
      cost += CHICKEN_PRICE;
   }

   if (buyHalibut == true) {
      cost += HALIBUT_PRICE;
   }

   if (buyBurger == true) {
      cost += BURGER_PRICE;
   }

   if (buySalmon == true) {
      cost += SALMON_PRICE;
   }

   if (buySalad == true) {
      cost += SALAD_PRICE;
   }
   /* // use conditional operator
   cost += buyChicken? CHICKEN_PRICE: 0.0;
   cost += buyHalibut? HALIBUT_PRICE: 0.0;
   cost += buyBurger? BURGER_PRICE: 0.0;
   cost += buySalmon? SALMON_PRICE: 0.0;
   cost += buySalad? SALAD_PRICE: 0.0;
   */
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost)

   let tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax)

   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost)

}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
