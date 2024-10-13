Hands-On Project 2-4

In this project you will calculate the cost plus the tax of ordering items from a restaurant’s online menu. So that the currency values are displayed with a leading $ character, and to two decimal places you will call a function created for you named formatCurrency(), which takes a number and returns a text string in the format $##.##. 

Do the following:

1. Use your code editor to open the project02-04_txt.html and project02-04_txt.js files from the js02 ► project04 folder. Enter your name and the date in the comment section of each file and save them as project02-04.html and project02-04.js, respectively.

2. Go to the project02-04.html file in your code editor and in the head section add a script element to load the project02-04.js file, deferring the loading the external script file until the entire page is loaded. Review the contents of the HTML file, noting the ids of different page elements. You will display the calculated values in span elements with ids of “foodTotal”, “foodTax”, and “totalBill”. Save your changes to the file.

3. Go to the project02-04.js file in your code editor. Below the comment section, declare the following constants with their initial values: CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, and SALES_TAX = 0.07.

4. Create the calcTotal() function containing the following:
    a. Declare the cost variable with an initial value of 0.

    b. Declare the buyChicken variable equal to the checked property of the element with the id “chicken”. In the same way, declare the buyHalibut, buyBurger, buySalmon, and buySalad variables equal to the checked property of elements with ids of “halibut”, “burger”, “salmon”, and “salad”, respectively.

    c. Use a comparison operator to increase the value of the cost variable by the value of the CHICKEN_PRICE constant if buyChicken is true or by 0 if otherwise (see Figure 2-21 as an example of your code). Do the same for the buyHalibut, buyBurger, buySalmon, and buySalad variables, increasing the value of total cost by the value of HALIBUT_PRICE, BURGER_PRICE, SALMON_PRICE, and SALAD_PRICE, respectively.

    d. Set the innerHTML property for the element with the id “foodTotal” to the value returned by the formatCurrency() function using cost as the parameter value.

    e. Declare the tax variable, setting its value equal to the cost variable multiplied by SALES_TAX.

    f. Set the innerHTML property for the element with the id “foodTax” to the value returned by the formatCurrency() function using tax as the parameter value.

    g. Declare the totalCost variable, setting its value equal to the cost variable plus the tax variable.

    h. Set the innerHTML property for the element with the id “totalBill” to the value returned by the formatCurrency() function using totalCost as the parameter value.

5. Directly above the calcTotal() function, insert an event handler that runs the calcTotal() function when the element with id “chicken” is clicked. Repeat this for the elements with the id “halibut”, “burger”, “salmon”, and “salad”.

6. Save your changes to the file and then open project02-04.html in your web browser. Verify that when you click each of the menu items the calculated cost and tax is automatically updated to reflect your choices.
