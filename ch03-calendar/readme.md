In this chapter, you will work on a web page displaying game results for the Tipton Turbines, a minor league baseball team in Tipton, Iowa. The page will retrieve game information from several arrays and display that content in an easy-to-read table.

To open the Tipton Turbines web page:

1. Use your code editor to go to the js03 ► chapter folder of your data files.

2. Open the js03_txt.html file in your code editor and enter your name and the date in the comment section of the file.

3. Scroll through the document to familiarize yourself with its contents. Notice that the page contains a web table in which the table body consists of five rows of seven table cells with the table cell ids containing calendar dates ranging from “2024-7-28” up to “2024-8-31”.

4. Save the file as js03.html and load the file in your browser.

To create an array of weekday names:

5. Open the js03_txt.js file in your code editor and enter your name and the date in the comment section of the file.

6. Directly below the comment section, enter the following code for the weekDays array:
    // Day of the week
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

7. Save the file as js03.js.

To load the js03.js and schedule.js files into the web page:

8. Return to the js03.html file in your code editor.

9. Directly above the closing </head> tag, insert the following script elements:
    <script src="scripts/script.js" defer></script>
    <script src="scripts/schedule.js" defer></script>

10. Save your changes to the file.

To view arrays in your browser console:

11. Return to the js03.html file in your web browser.

12. Open the console using commands appropriate for your web browser. (Hint: You can view your browser’s online help if you are unsure how to access the Developer Console.)

13. Within the console type gameDates.length and press Enter. The console returns a value of 23, indicating that there 23 elements in the gameDates array for the 23 games played by the team.

14. Type gameOpponents[4] and press Enter. The console returns the text string “Clinton” which is the fifth opponent listed in the calendar.

15. Type gameResults[4] and press Enter. The console returns the text string “L” indicating that the fifth game was a loss.

16. Type document.links.length and press Enter. The console reports 5 links in the document.

17. Type document.links[1].innerHTML and press Enter. The console returns the text string “Calendar”, indicating that the HTML code stored in the second text string is the word “Calendar”.

18. Type gameOpponents[23] to retrieve the opponent for a non-existent 24th game. The console returns the value undefined, indicating that there is no value matching this reference.

19. Continue exploring arrays and collections using the console. It is a great tool for becoming more familiar with these concepts and techniques. Close the console when finished.

To create the while loop:

20. Return to the js03.js file in your code editor.

21. At the bottom of the file insert the following event listener to run the addWeekDays() function when the page is loaded:
    window.addEventListener("load", addWeekDays);

22. Below this statement, add the following addWeekDays() function:
    function addWeekDays()
    {
        let i = 0;
        let headingCells = document.getElementsByTagName("th");
        while (i < 7) {
            headingCells[i].innerHTML = weekDays[i];
            i++;
        }
    }

23. Save your changes to the file and then reload the js03.html file in your web browser. 

To create the showGames() function:

24. Return to the js03.js file in your code editor.

25. At the bottom of the file insert an event listener to run the showGames() function when the page is loaded:
    window.addEventListener("load", showGame);

26. Below the event listener, add the following showGames() function
    function showGame()
    {
        for (let i = 0; i < gameDates.length; i++) {
            let gameInfo = "";

            // Open the paragraph
            gameInfo += "<p>";

            // Include the opponent
            gameInfo += gameOpponents[i] + "<br>";

            // Include the result and score
            gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

            // Close the paragraph            
            gameInfo += "</p>";

            // write the information into a table cell
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
    }

27. Save your changes to the file and then reload the js03.html file in your web browser. Information on each game is added to a table cell matching the game date. 

To create an else if statement:

28. Return to the js03.js file in your code editor and scroll down to the showGames() function.

29. Directly after the statement that writes the opening <p> tag, insert the following else if statement:
    // Display the game location
    if (gameLocations[i] === "h") {
        gameInfo += "vs. ";
    } else if (gameLocations[i] === "a") {
        gameInfo += "@ ";
    }

30. Save your changes to the file and then reload the js03.html file in your web browser. Verify that all games are listed as either home or away on the calendar

To display the innings played:

31. Return to the js03.js file in your code editor and go to the showGames() function.

32. Directly above the comment for closing the paragraph insert the following else if statement:
    // Display innings played for suspended, shortened, or extrainning games
    if (gameInnings[i] < 5) {
        gameInfo += " [" + gameInnings[i] + "]**";
    } else if (gameInnings[i] < 9) {
        gameInfo += " [" + gameInnings[i] + "]*";
    } else if (gameInnings[i] > 9) {
        gameInfo += " [" + gameInnings[i] + "]";
    }

33. Save your changes to the file and then reload the js03.html file in your web browser. 

To apply a switch statement:

34. Return to the js03.js file in your code editor and go to the showGames() function.

35. Replace the statement let gameInfo = "<p>" that writes the paragraph’s opening tag with the following switch statement that chooses one of four possible opening paragraph tags:
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

36. Save your changes to the file and then reload the js03.html file in your web browser.


