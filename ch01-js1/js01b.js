/*  JavaScript 7th Edition
    Chapter 1
    Chapter case

    Tinley Xeriscapes
    Author: 
    Date:   

    Filename: js01b.js
*/

//define variables containing plant filenames
let blanket = "blanket.jpg";
let rugosa = "rugosa.jpg";
let bluestem = "bluestem.jpg";
let a = "5 + 10";
//window.alert(eval(a));

let rewardsCustomer;
let pizzaPrice = rewardsCustomer ? 20.0 : 18.5;
window.alert(pizzaPrice);
let greeting = "Happy birthday!";
if (ageAtBirthday < 6) {
   greeting += " You are a cute little kid."; 
} else if (ageAtBirthday < 40) { 
   greeting += " Have lots of fun!";
} else if (ageAtBirthday === 16) {
   greeting += " You are old enough to drive."; 
} else {
   greeting += " You are over the hill!" ;

//add event handlers to the list items
document.getElementById("blanket").onclick = function() {
   document.getElementById("plantImg").src = blanket;
}
document.getElementById("rugosa").onclick = function() {
   document.getElementById("plantImg").src = rugosa;
}
document.getElementById("bluestem").onclick = function() {
   document.getElementById("plantImg").src = bluestem;
}

/*
   Information on available plants
   including link to USDA website
*/

let captionText = "<p>Plant choices for " +
                  "<a href='http://planthardiness.ars.usda.gov'>" +
                  "hardiness zones</a>" +
                  " 5a - 6b </p>";

document.getElementById("imgCaption").innerHTML = captionText;