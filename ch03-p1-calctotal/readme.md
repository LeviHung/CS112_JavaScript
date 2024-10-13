Hands-On Project 3-1

In this project you create an application that calculates the total cost of items selected from a lunch menu using a for loop and an if statement as part of the program code. The cost of each menu item is stored in the value attribute of an input control on a web form. Because attribute values are treated as text strings, you will have to convert the attribute value to a number using the following JavaScript function:

Number(object.value)

where object is a reference to an input box within the web page. Your application will automatically update the total order cost whenever the user clicks a menu item checkbox.

Do the following:

1. Use your code editor to open the project03-01_txt.html and project03-01_txt.js files from the js03 ► project01 folder. Enter your name and the date in the comment section of each file and save them as project03-01.html and project03-01.js, respectively.

2. Go to the project03-01.html file in your code editor and in the head section add a script element to load the project03-01.js file. Include the defer attribute to defer loading the file until the entire page is loaded. Study the contents of the HTML file, noting that all checkboxes for the menu items belong to the menuItems class. Save your changes to the file.

3. Go to the project03-01.js file in your code editor. Below the initial comment section, declare a variable named menuItems containing the collection of HTML elements belonging to the menuItem class using the getElementsByClassName() method.

4. Create a for loop that loops through the contents of the menuItems collection with a counter variable that starts with an initial value of 0 up to a value less than the length of the menuItems collection. Increase the counter by 1 with each iteration. Within the for loop, add an event listener to the menuItems[i] element in the collection (where i is the value of the counter), running the calcTotal() function when that item is clicked.

5. Create the calcTotal() function to calculate the total cost of the customer order given the selected menu items. Add the following commands to the function:

    a. Declare the orderTotal variable, setting its initial value to 0.

    b. Create a for loop that loops through the contents of the menuItems collection. For menuItems[i] (where i is the counter), apply an if statement that tests whether the item has been checked. If true, increase the value of the orderTotal variable by the value of menuItems[i]. (Hint: Use the Number() function to convert the value of menuItems[i] to a number.)

    c. After the for loop, insert a command to change the innerHTML property of the element with the id "billTotal" to the value returned by the formatCurrency() function using orderTotal as the parameter value.

6. Save your changes to the file and then open project03-01.html in your browser. Verify that the total cost of the order is automatically updated as you select and deselect menu items in the web form.


