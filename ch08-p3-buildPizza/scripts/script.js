"use strict";
/*    Levi Hung */
/*    Lab #17 */
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Levi Hung
      Date:   10/31/2024

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/
/* create an object literal named cart */
let cart = {
   items: [],
   addItem: function (foodItem) {
      this.items.push(foodItem);
   }
}

/* Constructor function for the Pizza object class */
function Pizza() {
   this.size;           // No initial value
   this.crust;          // No initial value
   this.toppings = [];  // An empty array

   // Method to add the pizza to the items array of a shopping cart
   Pizza.prototype.addToCart = function(cart) {
      cart.items.push(this);
   }

   // Method to add the topping to the toppings array of the pizza
   Pizza.prototype.addTopping = function(topping) {
      this.toppings.push(topping);
   }

   // Method to create a text string summarizing the content of the pizza
   Pizza.prototype.summarize = function() {
      let summary = "Pizza: ";
      summary += this.size + " " + this.crust;

      for (let item of this.toppings) {
         summary += " " + item.name + " (" + item.side + ")";
      }

      return summary;
   }
}

/* Constructor function for the Topping object class */
function Topping() {
   this.name;           // store the name of the topping
   this.side;           // whether covers the entire pizza or 
                        // is limited to the pizza’s left or right side
}







/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = "image/" + checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 

   // Create an instance of a Pizza object
   let myPizza = new Pizza();
   myPizza.size = pizzaSizeBox.value;
   myPizza.crust = pizzaCrustBox.value;

   for (let item of checkedToppings) {
      if (item.value !== "none") {
         // Create an instance of a Topping object
         let myTopping = new Topping;
         myTopping.name = item.name;
         myTopping.side = item.value;

         // Apply the addTopping(myTopping) method to myPizza
         myPizza.addTopping(myTopping);
      }
   }
   return myPizza;
}    

// Function to add the built pizza to the shopping cart
function updateCart() {
   let myPizza = buildPizza();
   
   cart.addItem(myPizza);
   
   console.log(cart);

   // Create a paragraph element containing the value of summarize(myPizza)
   let paraElement = document.createElement("p");
   paraElement.textContent = myPizza.summarize();

   // Append the paragraph to the cartBox element
   cartBox.appendChild(paraElement);

   // Reset the page for the next pizza
   clearPizzaImage();

   clearToppings();
}  
