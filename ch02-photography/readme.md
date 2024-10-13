In this chapter, you will create a program that calculates the total cost of photography services provided by Fan Trick Fine Art Photography.

To open the fan trick photography page:

1. Use your code editor to go to the js02 ► chapter folder of your data files.

2. Open the js02_txt.html file in your code editor.

3. Enter your name and the date in the comment section of the file.

4. Scroll through the document to familiarize yourself with its contents.

5. Save the file as js02.html and load the file in your browser.

6. Add the following values to the web form using the controls on the form: # of photographers: 1, # of hours 2, click the Memory book checkbox to indicate that a memory book should be part of the purchase, and finally enter an travel distance in miles of 25.

7. Refresh or reload the web page and notice that by refreshing or reloading the page, your values are erased.

To create the setupform() function:

8. Open the js02_txt.js file in your code editor.

9. Enter your name and the date in the comment section of the file and the save the file as js02.js.

10. Below the initial comment section, add code for the following function:
    function setupForm() {
       document.getElementById("photoNum").value = 1;
       document.getElementById("photoHrs").value = 2;
       document.getElementById("makeBook").checkbox = false;
       document.getElementById("photoRights").checkbox = false;
       document.getElementById("photoDist").value = 0;
    }

11. Return to the js02.html file in your code editor.

12. Directly above the closing </head> tag insert the following element to load the js02.js script file, deferring the loading of the file until after the entire page has loaded.
    <script src="scripts/script.js" defer></script>

13. Save your changes to the file.

To create an event listener for the load event:

14. Return to the js02.js file in your code editor.

15. Above the code for the setupForm() function insert the following event listener:
    // setup the form when the page loads
    window.addEventListener("load", setupForm);

16. Save your changes to the file and then reload js02.html in your web browser.

17. Verify that the page opens with the number of photographs set to 1, the number of hours set to 2, the two checkboxes unselected, and the distance set to 0.

To declare global constants:

18. Return to the js02.js file in your code editor.

19. Directly below the initial comment section, enter the following code declaring global constants:
    const EMP_COST = 100;      // cost of photographers per hour
    const BOOK_COST = 350;     // cost of memory book
    const REPRO_COST = 1250;   // cost of reproduction rights
    const TRAVEL_COST = 2;     // cost of travel per mile

20. Save your changes to the file.

To retrieve values from the web form:

21. Return to the js02.js file in your code editor.

22. At the bottom of the file insert the following getEstimate() function:
    function getEstimate() {
       let totalCost = 0;
       let photographers = document.getElementById("photoNum").value;
        let hours = document.getElementById("photoHrs").value;
        let distance = document.getElementById("photoDist").value;
    }

To add calculations to the getEstimate() function:

23.  Add the following commands to the getEstimate() function:
     totalCost += photographers * hours * EMP_COST;
     totalCost += photographers * distance * TRAVEL_COST;

24. Save your changes to the file.

To create variables for checkbox controls:

25. Below the statement declaring the distance variable in the getEstimate() function, add the following statement to determine whether the makeBook checkbox has been checked:
    let buyBook = document.getElementById("makeBook").checked;

26. Next add the following statement to determine whether the photoRights checkbox has been checked.
    let buyRights = document.getElementById("photoRights").checked;

To add the cost of the memory book and digital rights:

25. At the bottom of the getEstimate() function, insert the following statements:
    totalCost += buyBook? BOOK_COST: 0;
    totalCost += buyRights? REPRO_COST: 0;

26. Save your changes to the file.

To calculate and display the total cost estimate:

27. At the bottom of the getEstimate() function, add the following code:
    // Display the total cost estimate
    document.getElementById("estimate").innerHTML = "$" + totalCost ;

28. Scroll up to the setupForm() function and at the end of the function insert the following command to call the getEstimate() function:
    getEstimate();

29. Save your changes to the file and then reload the js02.html file in your web browser. The initial page should show a total cost estimate of $200 for the default options entered the webform.

To add onchange event handlers to the form controls:

30. At the bottom of the setupForm() function add the following statements:
    document.getElementById("photoNum").onchange = getEstimate;
    document.getElementById("photoHrs").onchange = getEstimate;
    document.getElementById("makeBook").onchange = getEstimate;
    document.getElementById("photoRights").onchange = getEstimate;
    document.getElementById("photoDist").onchange = getEstimate;

31. Save your changes to the file and then reload the js02.html file in your browser.

32. Test the form, verifying that as you change the plan options the total cost estimate automatically updates. Note that you may have to tab out of a form control to trigger the change event. The total estimate for a project that involves two photographers working for 3 hours traveling 30 miles to the event with both the memory book and photographic rights purchased by the customer. The total cost of the job would be $2320.