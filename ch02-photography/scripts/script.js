/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Levi Hung
      Date:   09/09/2024

      Filename: js02.js
 */
 const EMP_COST = 100;      // cost of photographers per hour
 const BOOK_COST = 350;     // cost of memory book
 const REPRO_COST = 1250;   // cost of reproduction rights
 const TRAVEL_COST = 2;     // cost of travel per mile

 // setup the form when the page loads
 window.addEventListener("load", setupForm);
 
 function getEstimate() {
     let totalCost = 0;
     let photographers = document.getElementById("photoNum").value;
     let hours = document.getElementById("photoHrs").value;
     let distance = document.getElementById("photoDist").value;
     let buyBook = document.getElementById("makeBook").checked;
     let buyRights = document.getElementById("photoRights").checked;
     
     totalCost += photographers * hours * EMP_COST;
     totalCost += photographers * distance * TRAVEL_COST;
     totalCost += buyBook? BOOK_COST: 0;
     totalCost += buyRights? REPRO_COST: 0;
     
     // Display the total cost estimate
     document.getElementById("estimate").innerHTML = "$" + totalCost ;
 }
 
 function getEstimate2(empCost) {
    let totalCost = 0;
    let photographers = document.getElementById("photoNum").value;
    let hours = document.getElementById("photoHrs").value;
    let distance = document.getElementById("photoDist").value;
    let buyBook = document.getElementById("makeBook").checked;
    let buyRights = document.getElementById("photoRights").checked;
    
    totalCost += photographers * hours * empCost;
    totalCost += photographers * distance * TRAVEL_COST;
    totalCost += buyBook? BOOK_COST: 0;
    totalCost += buyRights? REPRO_COST: 0;
    
    document.getElementById("estimate").innerHTML = "$" + totalCost ;
}
 function setupForm() {
     document.getElementById("photoNum").value = 1;
     document.getElementById("photoHrs").value = 2;
     document.getElementById("makeBook").checkbox = false;
     document.getElementById("photoRights").checkbox = false;
     document.getElementById("photoDist").value = 0;
        
     getEstimate();


     document.getElementById("photoNum").onchange = getEstimate;
     document.getElementById("photoHrs").onchange = getEstimate;
     document.getElementById("makeBook").onchange = getEstimate;
     document.getElementById("photoRights").onchange = getEstimate;
     document.getElementById("photoDist").onchange = getEstimate;
    
     /* // For Test:
     document.getElementById("photoNum").addEventListener("change", 
        function() {getEstimate2(1000)}
     );

     {
        //let weekDays = new Array("a", 1);
        let weekDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        
        //var x = "5";
        console.log(typeof(weekDays[1]));
        console.log(weekDays);
    }
        console.log(weekDays);
    */
    /*
    try {
        userID = document.getElementById("IDBox").value;
        if (userID === "") throw "Missing user ID";
        window.alert("Your user ID is " + userID);
    } catch (err) {
        window.alert("You must enter a user ID");
    }
        */
    /*
    let num = -9;
    try {
        if (num < 0) throw "Attempt to calculate the square root of a negative value.";
        let sqrt = number**0.5;
        window.alert("The square root of " + number + " is " + sqrt);
    } catch (error) {
        window.alert(error);
    }
        */
    //debugger;
    /*
    let userName = "Levi Hung";
     try {
        window.alert("User name is " + username);
     } catch (err) {
        window.alert("Invalid Input: " + err.name + ", " + err.message);
     }
    */
     /*
     window.onerror = function;
     window.addEventListener("error", function);

     function processErrors(message, url, line) {
        console.log("The file " + url + " generated the following error: " + 
                     msg + " on line: " + line);
        return value;
     }
    */
 }
