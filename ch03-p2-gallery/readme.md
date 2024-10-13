Hands-On Project 3-2

In this project you will generate an image gallery using images of the International Space Station. Each image will be placed within a figure box accompanied by a caption taken from an array of caption text.

Do the following:

1. Use your code editor to open the project03-02_txt.html and project03-02_txt.js files from the js03 ► project02 folder. Enter your name and the date in the comment section of each file and save them as project03-02.html and project03-02.js, respectively.

2. Go to the project03-02.html file in your code editor and in the head section add a script element to load the project03-02.js file, deferring the loading of the JavaScript source file until the entire HTML file is loaded. Study the contents of the HTML file and save your changes.

3. Go to the project03-02.js file in your code editor. Below the code that creates and populates the captions array, declare the htmlCode variable, setting its initial value to an empty text string.

4. Create a for loop with a counter that goes from 0 to less the length of the captions array in increments of 1. With each iteration, add the following text to the value of the htmlCode variable:
<figure>
<img alt="" src="slidei.jpg"/>
<figcaption>caption[i]</figcaption>
</figure>
where i is the value of the counter for that iteration and captions[i] is the corresponding element from the captions array.

5. After the for loop, change the inner HTML of the document element by the id "gallery" to the value of the htmlCode variable.

6. Save your changes to the file and then load project03-02.html in your browser. Verify that the page displays the 14 images in the slide gallery along with their captions.