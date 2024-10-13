Hands-On Project 1-2

In this project, you will create a web page that uses variables to display information about high-speed Internet plans offered by an Internet service provider. 

Do the following:

1. Use your code editor to open project01-02_txt.html and project01-02_txt.js from the js01 ► project02 folder. Enter your name and the date in the comment section of each document and save them as project01-02.html and project01-02.js, respectively.

2. Below the comment section in the project01-02.js file, declare the following variables with indicated initial values:

    service1Name = “Basic”, service2Name = “Express”, service3Name = “Extreme”,

    service4Name = “Ultimate”, service1Speed = “0 Mbps”, service2Speed = “100

    Mbps”, service3Speed = “500 Mbps”, and service4Speed = “1 Gig”.

3. Save your changes to the file.

4. Return to the project01-02.html file in your code editor. Directly above the closing </head> tag, insert a script element to load the project01-02.js source file. Do not add either the async or defer attributes to the script so that the code in the external file is loaded immediately as the web page is parsed by the browser.

5. Go to the first table row of the tbody section of the web table. Within the first <td> tag, insert a script to write the value of the service1Name variable. Within the second <td> tag, insert another script to write the value of the service1Speed variable.

6. Repeat Step 5 for the two cells in each of the next three table rows in the tbody section, writing the values of service2Name and service2Speed variables through the service4Name and service4Speed variables.

7. Save your work and then open project01-02.html in your web browser. Verify that the content of the page