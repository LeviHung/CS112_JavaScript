"use strict";
/*    Levi Hung */
/*    Lab #20 */
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Levi Hung
      Date:   11/14/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "image/piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Iterate through every item in the pieces node list.
for (let items of pieces) {
   // Add an event listener that runs the grabPiece() function 
   // in response to the pointerdown event.
   items.addEventListener("pointerdown", grabPiece);
}

 // Grab a piece from the puzzle board
function grabPiece(e) {
   // Store the initial position of the pointer
   pointerX = e.clientX;
   pointerY = e.clientY;

   // Disable the browser's default touch actions 
   // around the target of the pointerdown action
   e.target.style.tocuhAction = "none";

   zCounter = zCounter + 1;
   e.target.style.zIndex = zCounter;

   // Store the piece's initial position
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;

   // Add an event listener that runs the movePiece() and dropPiece() functions 
   // in response to the pointermove and pointerup events
   e.target.addEventListener("pointermove", movePiece);
   e.target.addEventListener("pointerup", dropPiece);
}

// Move the piece along with the pointer
function movePiece(e) {
   let diffX = e.clientX - pointerX;
   let diffY = e.clientY - pointerY;
   
   // Calculate the piece's new position, and the piece is placed within the 
   // puzzle board using the CSS left and top properties.
   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";
}

// Drop the piece onto the puzzle board
function dropPiece(e) {
   e.target.removeEventListener("pointermove", movePiece);
   e.target.removeEventListener("pointerup", dropPiece);
}