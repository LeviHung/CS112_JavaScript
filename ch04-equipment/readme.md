You have been hired by Tuba Farm Equipment, located in Fargo, North Dakota, to finalize a web application that selects tractor models based on the acreage to be cultivated, the crop to be planted, the months of work, and the preferred fuel source. The web application has been coded but does not work. You will use debugging techniques to identify and fix the bugs in the program

To open the Tuba Farm Equipment page:

1. Go to the js04 ► chapter folder of your data files.

2. Use your code editor to open the js04_txt.html and js04_txt.js files and enter your name and the date in the comment section of each file.

3. Return to the js04.html file in your code editor. Scroll through the document to familiarize yourself with its content. The article element contains the form, and the aside element contains empty h2 and p elements where the program will display its tractor recommendation.

4. Open the js04.html file in your browser, and then in the first text box (with the label “acres”), type your first name. Because the program expects a number in this box, your entry of text should generate an error. However, nothing happens when you type text in the box.

5. Complete the form as follows: Enter 5000 in the acres input box, click the Wheat checkbox to select it as a crop to grow, enter 10 in the months input box, and click the Standard diesel option button as the preferred fuel source.

6. Return to the js04.js file in your code editor and take some time to examine the contents of the file.

To start debugging with the browser console:

7. Reload the js04.html file in your web browser and then open your browser’s console. You do not, at this time, have to enter any data in the web form.

8. The console reports one syntax error located on line 18 of the js04.js file. Click the link to the line number to view the contents of that file and scroll down to Line 18.

To correct the syntax error:

9. Go to the js04.js file in your code editor and scroll down Line 17 declaring the fuelComplete variable.

10. Edit the line so that it reads:
    let fuelComplete = true;

11. Save your changes to the file and then reload the js04.html file in your browser (you do not have to close the console.) 

12. Return to the js04.js file in your code editor and edit Line 27 by inserting the equals operator, so that it reads as follows:
    let monthsFieldse = document.getElementsByTagName("fieldset")[2];

13. Save your changes to the file and then reload the js04.html file in your browser. Another syntax error appears on the very next line.

14. Return to the js04.js file in your code editor and edit Line 28 by inserting a closing double quotation mark so that it reads:
    let fuelFieldset = document.getElementsByTagName("fieldset")[3];

15. Save your changes to the file and then reload the js04.html file in your code editor. A fourth and final syntax error appears on Line 70.

16. The error in this declaration of the verifyAcres() function is the missing opening parenthesis symbol, (. Return to the js04.js file in your code editor and edit Line 70 by inserting the opening parenthesis symbol so that it reads:
    function verifyAcres() {

17. Save your changes to the file and then reload the js04.html file in your browser. You should see no more syntax errors in the browser console.

To test the page under strict mode:

18. Go to the js04.js file in your code editor and insert the following statement at the top of the file directly before the commented head section.
    "use strict";

19. Save your changes to the file and then reload js04.html in your web browser. The console flags Line 16 as an error because the acresComplete variable has not been properly declared.

20. Return to the js04.js file in your code editor. Scroll down and change the statement acresComplete = true; to
    let acresComplete = true;

21. Save your changes to the file and then reload the js04.html file in your browser. Verify that no errors are reported in the code.

22. Close the browser console.

To start debugging with the browser console:

23. If necessary, load the js04.html file in your web browser.

24. Enter 5 in the acres input box. Check the Wheat check box, enter 8 in the months input box, and then click the E85 option button for the preferred fuel choice.

To trace conditional statements with alert boxes:

25. Return to the js04.js file in your code editor and scroll down to the createRecommendation() function.

26. Directly after the if (acresBox.value >= 5000) statement, insert the following command to display an alert box if the program reaches this first condition in the if statement:
    window.alert("First if block for " + acresBox.value + " acres");

27. Scroll down to the } else { // more than 5000 acres statement and directly below that else clause, insert the following command:
    window.alert("Else block for " + acresBox.value + " acres");

28. Save your changes and then reload js04.html in your web browser.

29. Type 5 in the acres input box. The browser displays the alert box with the message “Else block for 5 acres”.

To fix the logic error in the if else statement:

30. Return to the js04.js file in your code editor and go to the createRecommendation() function.

31. Change the condition in the if statement from acresBox.value >= 5000 to the following:
    acresBox.value <= 5000;

32. Remove the statements displaying the alert boxes within the if condition and the else clause.

33. Save your changes to the file.

34. Reload js04.html in your web browser.

35. Type 5 in the acres box and verify that the page now recommends the E3250D tractor, a model more suitable for small farms or big backyards.

To view the recommended tractor for 8 months of work:

36. Reload the js04.html file in your web browser.

37. Enter 5 in the acres box, check the Wheat checkbox, and enter 8 in the months box to indicate the field will be worked on for eight months.

To trace the error with the console log:

38. Return to the js04.js file in your code editor and scroll down to the createRecommendation() function.

39. Within the nested if statement, directly below the statement messageElement.innerHTML = E3250Desc; add the following statement to write the month value to the console log:
    console.log("Nested if: " + monthsBox.value + " months");

40. Directly below the statement messageElement.innerHTML = E2600Desc; within the nested else statement, insert the following command:
    console.log("Nested else: " + monthsBox.value + " months");

41. Save your changes to the file and then reload js04.html in your web browser.

42. Open your browser’s debugging console and then click Sources from the Debugger menu at the top of the pane to view the source and console. If you do not see the console, press the Esc key to display it or click the A character in the upper-right of the Developer pane and click Show console drawer.

43. Type 5 in the acres box of the web page. The program is set up to run the createRecommendation() function whenever data is input into the form. In this case, the console log displays a message with a null value for months, because you have not entered that information yet.

44. Click the Wheat checkbox and note that another message is sent to the console as the createRecommendation() function is once again run in response to the click event.

45. Type 12 in the months box. Notice that with the input of each keystroke, another message is logged to the console.

46. Click the js04.js:107 link in the console log to display that line within the js04.js file. 

47. Close the console pane in your browser.

To fix the logic error in the if else statement:

48. Return to the js04.js file in your code editor and go to the createRecommendation() function.

49. Change the nested if statement that reads if (monthsBox.value <= 10) { to:
    if (monthsBox.value >= 10) {
    
50. Remove the two console.log commands from the program and then save your changes.

51. Reload the js04.html file in your browser and enter 5 in the acres box, click the Wheat checkbox, and enter 8 in the months box. The page recommends the E2600D tractor, a medium-duty model geared towards small farms that do not need a year-round tractor.

To open the Chrome browser debugger:

52. If necessary, reopen the js04.html file in your browser.

53. Click the Chrome menu A in the upper-right corner of the page, click More tools and then Developer tools.

54. Click Sources in the Developer pane.

55. Click the A icon on the top-right corner of the pane and click the Dock to right icon (the last entry in the Dock side list.)

56. Click the gear icon   located in the top-right corner of the Developer pane to display the Settings options for the pane.

57. Go to the Preferences section, click the Panel layout list box and click horizontal to arrange the sections horizontally.

58. Click the close button (×) located in the top-right corner of the Settings window to return to the Developer pane.

To set breakpoints in the createRecommendation() function:

59. Enter 100 in the acres box, click the Wheat checkbox, enter 12 in the months box, and then click the E85 options button. The recommended tractor for these options should be E3250E.

60. Within the debugger window, scroll down the contents of the js04.js file and click the line number 100 next to the line if (monthsBox.value >= 10). The line number should be highlighted after you click it to indicate that you have set a breakpoint at this location.

61. Click the line numbers 101, 104, 109, 110, and 113 to add breakpoints to those lines.

62. Click the acres box in the tractor selection form and type 0 to change the acres from 100 to 1000. Typing that digit triggers an event listener which runs the createRecommendation() function. The program pauses at the breakpoint in Line 100.

63. Hover your mouse pointer over monthsBox.value expression in Line 100. The debugger displays the popup value 12, which is the value entered in the months box.

To continue the program execution:

64. Click the Resume script execution button located either in the debugger or in the popup displayed above the browser or press the keyboard shortcut F8.

65. Resume the program again using the Resume script execution button or the F8 shortcut key.

66. Type 0 in the acres box, increasing the number of acres from 1000 to 10000.

67. Continue the program execution using either the Resume script execution button or the F8 shortcut key.

68. Continue the program execution once more. The program continues running to its end, without hitting any other breakpoints.

To remove the breakpoints:

69. Scroll up to Line 100 and click the 100 line number to remove the breakpoint.

70. You can proceed in this fashion to remove the five other breakpoints. However, if you have a lot of breakpoints you can remove them all at once using the Breakpoints list in the debugger.

71. Click the Breakpoints arrow box directly below the Call Stack arrow box in the debugger to display a list of all breakpoints in the program.

72. Right-click anywhere within the list and click Remove all breakpoints from the popup menu.

To apply stepping options when tracing code:

73. Scroll to Line 87 and click 87 to establish a breakpoint at that line.

74. On the web form, click the E85 option button, which triggers the event listener for that button.

75. The program pauses at the statement that calls the testFormCompleteness() function.

76. Click the Step Into button in the debugger or press the F11 shortcut key.

77. Click the Step Into button to move to the next statement, Line 93 which calls the createRecommendation() function.

78. Because you have already explored the code in the createRecommendation() function, click the Step Over button to execute the code within the function but not proceed through it step-by-step.

79. Click the Step Into button. The debugger goes to Line 88, which marks the end of the verifyFuel() function.

80. Click the Step Out button to step out of the verifyFuel() function and complete the execution of the program.

81. Click the Line 87 breakpoint to remove it.

To track variables and expressions with the Scope and Watch windows:

82. Add a breakpoint at Line 123 to pause the program at the execution of this line.

83. Click the E85 option button in the web form. The event handler for the option button is triggered and the program pauses at Line 123.

84. Click the Scope tab near the bottom center of the debugger to view a scrollable list of all local and global variables and their values. You may have to click the arrow icons within the window to expand the list of variables and expressions.

85. Click the Scope tab near the bottom center of the debugger to view a scrollable list of all local and global variables and their values. You may have to click the arrow icons within the window to expand the list of variables and expressions.

86. Type messageHeadElement.innerHTML and press Enter. As you type, the debugger displays a list box of names and expressions. To reduce your typing and avoid typing mistakes, you can press Tab to select the option highlighted in the list box.

87. Click the Step In button twice. The debugger moves to Line 124 and then to the end of the if else statement. Again click the Resume script execution button to continue running the program to the end.

88. Next, click the Biodiesel option button on the web form. The script pauses once again at Line 123.

89. Click the Step In button to first move to Line 125 and then to Line 126. The value of the messageHeadElement.innerHTML expression shown in the Watch window changes to “B”. A value which is incorrect and thus must be the source of the error in the program.

90. Click the Resume script execution button to run the program to its end.

91. Remove the breakpoint in Line 123.

To fix the logic error in the program:

92. Go to the js04.js file in your code editor.

92. Scroll down to the bottom of the file and change the statement messageHeadElement.innerHTML = "B"; to:
    messageHeadElement.innerHTML += "B";

93. Save your changes to the file and then reload js04.html in your browser.

94. Enter 10000 in the acres box, click the Wheat checkbox, enter 12 in the months box, and click the Biodiesel option button. The web page returns a recommendation for the W2500B tractor, a heavy-duty tractor designed for the needs of wheat, corn, and soy farmers.

To view the call stack during program execution:

95. Add a breakpoint to Line 87 containing the statement that calls the testFormCompleteness() function.

96. Click the E85 option button the web form to initiate the event handler and run the program.

97. Within the debugger tools click the Call Stack arrow if necessary, to view its contents. The verifyFuel() function is listed within the stack along with the location indicating both the file name and the line number.

98. Click the Step Into button to step into the verifyFuel() function on Line 92 as the program continues.

99. The testFormCompleteness function is added to the top of the call stack, indicating that the testFormCompleteness() function is the currently active function and when it is completed, the program will return to the verifyFuel() function.

100. Click the Step Into button twice to trace the program into the createRecommendation() function located on Line 99.

101. Continue clicking the Step Into button to complete the createRecommendation() function and return to the testFormCompleteness() function. The call stack is revised to show the current hierarchy of the active functions in the code.

102. Click the Step Into function again to move back to the verifyFuel() function on Line 87.

103. Click the Resume script execution button to complete the running of the program.

104. Remove the breakpoint on Line 87 and close the debugger.

To test for a valid acreage:

105. Return to the js04.js file in your code editor and scroll down to the verifyAcres() function.

106. Replace the statement that calls the testFormCompleteness() function with the following try catch statement:
    try {
      if (!(acresBox.value > 0)) {
         throw "Enter a postive acreage";
      }
      testFormCompleteness();      
   } catch (error) {
      messageElement.innerHTML = error;
      messageHeadElement.innerHTML = "";
   }

107. Save your changes to the file and then reload js04.html in your web browser.

108. Enter 0 in the acres box. The event handler immediately responds to the action, running the verifyAcres() function. Because this is not a positive value, an exception is thrown, and the error text is displayed in the left sidebar.

109. Change the value in the acres box to 1000 and verify that no exception is thrown, and the sidebar displays the details of the E2600D tractor.

To test for a valid duration of operation:

110. Return to the js04.js file in your code editor and scroll down to the verifyMonths() function.

111. Replace the statement calling the testFormCompleteness() function with the following:
    try {
       if (!(monthsBox.value >= 1 && monthsBox.value <= 12)) {
          throw "Enter months between 1 and 12";
       }
       testFormCompleteness();
    } catch (error) {
       messageElement.innerHTML = error;
       messageHeadElement.innerHTML = "";
    }

112. Save your changes to the file and then reload js04.html in your web browser.

113. Enter 14 in the months box. The event handler runs the verifyMonths() function, catching the user error and displaying the message in the left sidebar.

114. Change the value in the acres box to 6 and verify that the sidebar displays information on the E2600D tractor.

