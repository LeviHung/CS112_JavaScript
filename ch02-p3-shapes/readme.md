Hands-On Project 2-3

In this project you will create an application that responds to the movements of the mouse over and out of a page object. The event that triggers the mouse over the object is called mouseover while moving the mouse out from an object triggers the mouseout event. In this application you will display a different message depending on the shape the mouse is hovering over or no message at all if the mouse is hovering over no shape. Figure 2-32 shows a preview of the page with the message for the mouse hovering over the circle

Do the following:

1. Use your code editor to open the project02-03_txt.html and project02-03_txt.js files from the js02 ► project03 folder. Enter your name and the date in the comment section of each file and save them as project02-03.html and project02-03.js, respectively.

2. Go to the project02-03.html file in your code editor and in the head section add a script element to load the project02-03.js file, deferring the loading the external script file until the entire page is loaded. Review the contents of the HTML file and note that the three shapes are placed within div elements with the ids “square”, “triangle”, and “shape”. There is also an empty paragraph with the id “feedback”. Save your changes to the file.

3. Go to the project02-03.js file in your code editor. Attach an onmouseover event handler to the element with the id “square”. In response to the event run an anonymous function containing a statement that changes the innerHTML property of the element with the id “feedback” to the text string “You ‘re hovering over the square”.

4. Attach an onmouseout event handler to the element with the id “square”. In response to the event run an anonymous function containing a command that changes the innerHTML property of the element with the id “feedback” to an empty text string.

5. Repeat Steps 3 and 4 for the element with the id “triangle”.

6. Repeat Steps 3 and 4 for the element with the id “circle”.

7. Save your changes to the file and then open project02-03.html in your browser. Verify that as you hover your mouse pointer over each shape, a message indicating the shape in displayed on the page and when you move your mouse pointer away from the shape the message disappears.

