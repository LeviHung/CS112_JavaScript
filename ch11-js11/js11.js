"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   Levi Hung
   Date:     11/20/2024

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton"); 
   let suggestBox = document.getElementById("suggestBox");    
 
   // Create a request object
   let xhr = new XMLHttpRequest();

   // Handle the changing request state
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
         if (xhr.status >= 200 && xhr.status < 300) {
            // Manage the response
            stories.innerHTML = xhr.responseText;
         } else {
            console.log("Request failed: " + xhr.statusText);
         }
      }
   }
   
   // Open the request and send it
   xhr.open("get", "commentary.html");

   xhr.send(null);

   // Retrieve archived articles from the web server
   sButton.onclick = () => {
      fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
      .then ( response => {
         if (response.ok) {
            return response.text();

         } else {
            return "Unable to retrieve commentary";
         }
      })
      .then ( comtext => stories.innerHTML = comtext )
      .then (() => {
         let topic = sInput.value.toLowerCase();
         getGIF(topic);
      })
      .catch (stories.innerHTML = "Network Failure");
   };

   // Fetch current headlines from the web server
   fetch("headlines.xml")
   .then (response => response.text())
   .then (str => new DOMParser().parseFromString(str, "text/xml"))
   .then (dom => {
      let items = dom.querySelectorAll("item");
      for (let story of items) {
         let headline = story.children[0].textContent;
         let link = story.children[1].textContent;
         let summary = story.children[2].textContent;
         let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2><p>${summary}</p></article>`;
         news.insertAdjacentHTML("beforeend", htmlCode);
      }
   });

   sInput.onkeyup = () => {
      if (sInput.value === "") {
         suggestBox.style.display = "none";
      } else {
         fetch("keywords.pl?suggest=" + encodeURIComponent(sInput.value))
         .then (response => response.json())
         .then (keywords => {
            if (keywords.matches.length === 0) {
               suggestBox.style.display = "none";
            } else {
               suggestBox.style.display = "block";
               for (let word of keywords.matches) {
                  let suggestion = document.createElement("div");
                  suggestion.textContent = word;
                  suggestBox.appendChild(suggestion);

                  suggestion.onclick = () => {
                     sInput.value = word;
                     suggestBox.style.display = "none";
                     sButton.click();
                  }
               }
            }
         })
      }
   }

   function getGIF(topic) {
      const url = "Https://api.giphy.com/vl/gifs/random";
      const key = "key";
      fetch (`${url}?api_key=${key}&tag=${topic}&limit=1&rating=pg`)
      .then(response => response.json())
      .then(obj => {
         let newImg = document.createElement("img");
         newImg.src = obj.data.images.fixed_hight.url;
         stories.appendChild(newImg)
      });
   }
}