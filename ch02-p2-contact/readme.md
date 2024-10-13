Hands-On Project 2-2

In this project you will create an application that tests whether all fields within a web form have been completed. In creating this application, you will take advantage of the fact that empty text strings are falsy and in a conditional operator will be treated as having the Boolean value false and non-empty strings are treated as truthy with a Boolean value of true. If any of the form fields is left empty, the application will display the alert box shown in Figure 2-31 when the Submit button is clicked, otherwise an alert box with the message “Thank you!” is displayed

Do the following:

1. Use your code editor to open the project02-02_txt.html and project02-02_txt.js files from the js02 ► project02 folder. Enter your name and the date in the comment section of each file and save them as project02-02.html and project02-02.js, respectively.

2. Go to the project02-02.html file in your code editor and in the head section add a script element to load the project02-02.js file, deferring the loading the external script file until the entire page is loaded. Review the contents of the HTML file. Note that there are three input controls with the ids “name”, “email”, and “phone”. Each of these controls must be filled out for the form to be submitted.

3. Go to the project02-02.js file in your code editor. Create a function named verifyForm() with no parameters. Within the function do the following:

    a. Declare the name variable equal to the value of the input control with the id “name”.

    b. Declare the email variable equal to the value of the input control with the id “email”.

    c. Declare the phone variable equal to the value of the input control with the id “phone”.

    d. Insert a conditional operator that tests the truthy or falsy value of and name and email and phone using the && operator. If the result of this conditional expression is true, use the window.alert() method to display the message “Thank you!”, otherwise display the message “Please fill in all fields”.

4. Below the verifyForm() function insert a statement that attaches an event listener to the page element with the id “submit”. When the click event occurs for this element, run the verifyForm() function.

5. Save your changes to the file and then open project02-02.html in your web browser.

6. Test the web form by clicking the Submit button with one or all the fields left blank, verifying that an alert box with the message “Please fill in all fields” is displayed. Enter text in all the fields and click the Submit button, verifying that an alert box with the message “Thank you!” is displayed.