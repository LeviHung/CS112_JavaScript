"use strict";
/* Levi Hung */
/* Lab #10 */
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Levi Hung
      Date:   10/04/2024

      Filename: project05-02.js
*/

// The images variable containing an HTML collection 
// of all elements with the tag name "img".
let images = document.getElementsByTagName("img");

// The photoBucket variable referencing the element
// with the id "photo_bucket".
let photoBucket = document.getElementById("photo_bucket");

// The photoList variable referencing the element
// with the id "photo list".
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++)
{
   images[i].onclick = function() {
      if (this.parentNode.id == "photo_bucket")     // clicked image is in bucket 
      {
         // Create an element node named newItem for the <li> element,   
         let newItem = document.createElement("li")
         photoList.appendChild(newItem);            // move the image to list
         newItem.appendChild(this);
      } 
      else                                          // clicked image is in list
      {
         let oldItem = this.parentNode;             // the <li> element
         photoBucket.appendChild(this);             // move the image to bucket
         oldItem.parentNode.removeChild(oldItem);   // remove the <li> element      
      } 
   }
}