/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Levi Hung
     Date:     09/18/2024

     Filename: js03.js
 */

// Day of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//let weekDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

window.addEventListener("load", addWeekDays);
function addWeekDays()
{
    let i = 0;
    let headingCells = document.getElementsByTagName("th");
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        i++;
    }
}

window.addEventListener("load", showGame);

// Function to write game information into the calendar
function showGame()
{
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        // Open the paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;    
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        // Display the game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        // Include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        // Include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i] + "]**";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i] + "]*";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        } else {
            ;
        }
        
        // Close the paragraph  
        gameInfo += "</p>";

        // write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}