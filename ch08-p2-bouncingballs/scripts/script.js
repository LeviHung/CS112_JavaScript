"use strict";
/*    Levi Hung */
/*    Lab #16 */
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Levi Hung
      Date:   10/31/2024

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/
/* create an object literal named box */
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
}

/* Constructor function for the ball class */
function ball(size) {
   // Set radius to size and other poroperties to null
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
 
   // Method to move the ball within the container, 
   // bouncing it off the container sides
   ball.prototype.moveWithin = function(container) {
      let ballTop = this.yPos;
      let ballLeft = this.xPos;
      let ballBottom = this.yPos + this.radius;
      let ballRight = this.xPos + this.radius;

      if (ballTop < 0 || ballBottom > container.height) 
      {
         container.yPos += this.yVelocity;
         this.yVelocity = - this.yVelocity;
      }

      if (ballLeft < 0 || ballRight > container.width) 
      {
         container.xPos += this.xVelocity;
         this.xVelocity = -this.xVelocity;
      }

      // Move the ball within the container by increasing the yPos and xPos value
      this.yPos += this.yVelocity;
      this.xPos += this.xVelocity;
   }
}





/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   // Create an instance of a ball object
   let newBall = new ball(BALL_RADIUS);
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.yVelocity = rand(-10, 10);
   newBall.xVelocity = rand(-10, 10);

   // Animate the motion of the ball
   // Run the anonymous function every 25 milliseconds
   window.setInterval(function () {
      newBall.moveWithin(box);
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
   
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";
   }, 25);
      
};

/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}