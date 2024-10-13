Hands-On Project 1-3

In this project, you will explore how to write text to a specific element in your web page in response to the onclick event handler. To complete the exercise, you will apply the following JavaScript expression:

document.getElementById("id").innerHTML = "text";

where id is the value of the id attribute for the page element and text is the text of the content to be written into the element. You will use this expression to enhance a web form by displaying the message “Thank you for your order” when the user clicks the Submit button.

Do the following:

1. Use your code editor to open project01-03_txt.html from the js01 ► project03 folder. Enter your name and the date in the comment section of the document and save it as project01-03.html.

2. Scroll down to the bottom of the file and locate the input element for the Submit button.

3. Add an onclick event handler to the <input> tag that changes the innerHTML value of the page element with the id “submitMsg” to the text message Thank you for your order. (Note: The entire JavaScript expression should be enclosed within a set of double quotation marks, but the id and the text message should be enclosed within single quotes.)

4. Save your changes to the file and then open project01-03.html in your web browser. Click the Submit button and verify that the text “Thank you for your order” appears on the bottom of the page.