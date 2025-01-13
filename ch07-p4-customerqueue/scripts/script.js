"use strict";
/*    Levi Hung */
/*    Lab #15 */
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Levi Hung
      Date:   10/23/2024

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let statusBar = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.onclick = function() {
   // Add the value of the customerName object to the end of the customers array
   customers.push(customerName.value);

   // Update the contents of the ordered list that appears on the web page
   generateCustomerList();

   // Change the text of the status paragraph
   statusBar.textContent = customerName.value + " added to the end of the queue";
};

searchButton.onclick = function() {
   // Locate the index of the array item whose value equals the value of 
   // the customerName object, 
   // Add 1 to the index value to get the position of the customer.
   let place = customers.indexOf(customerName.value) + 1;

   if (place === 0) 
   {
      statusBar.textContent = customerName.value + " is not found in the queue";
   } 
   else 
   {
      statusBar.textContent = customerName.value + " found in position " + 
                              place + " of the queue";
   }
};

removeButton.onclick = function() {
   let index = customers.indexOf(customerName.value);

   if (index !== -1)
   {
      // Remove one item from the customers array whose index equal the value of 
      // the index variable
      customers.splice(index, 1);

      statusBar.textContent = customerName.value + " removed from the queue"; 
      
      generateCustomerList();
   }
   else
   {
      statusBar.textContent = customerName.value + " is not found in the queue"; 
   }
};

topButton.onclick = function() {
   // Remove the first item from the customers array
   let topCustomer = customers.shift();

   statusBar.textContent = topCustomer + " from the queue"; 
   
   generateCustomerList();
};

