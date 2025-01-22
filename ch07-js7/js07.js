"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Chapter case   

      Word Cloud   Generator
      Author: Levi Hung
      Date:   10/23/2024          

      Filename:       js07.js
 */
document.getElementById("getFile").onchange = function() {
   // Retrieve information about the selected file
   let userFile = this.files[0];  
   
   // Verify that a text file is selected
   try {
      let isText = userFile.type.startsWith("text");
      if (!isText) {
            throw userFile.name + " is not a text file";
      }

      // Read the contents of the selected file
      let fr = new FileReader();
      fr.readAsText(userFile);

      // Once the file has finished loading, display in the page
      let sourceDoc = document.getElementById("wc_document");
      fr.onload = function() {
            sourceDoc.innerHTML = fr.result;

            // Store the text of the document, removing HTML tags
            let sourceText = sourceDoc.textContent;
            
            // Generate the word cloud
            wordCloud(sourceText);
      };

   }
   // Alert the user to select a text file
   catch (error) {
      window.alert(error);
   }

   function wordCloud(sourceText) {
      sourceText = sourceText.toLowerCase();

      sourceText = sourceText.trim();

      //console.log(sourceText);
      // The substring() method treats negative indexes as zero. 
      // console.log("Abraham Lincoln".substring(-7));

      // Leave only alphabet characters and witespace in the text
      let alphaRegx = /[^a-zA-Z\s]/g;
      sourceText = sourceText.replace(alphaRegx, "");
      //console.log(sourceText);
      
      // Remove stop words from the text
      for (let i = 0; i < stopWords.length; i++) {
         let stopRegx = new RegExp("\\b" + stopWords[i] + "\\b", "g");
         sourceText = sourceText.replace(stopRegx, "");
      }
      //console.log(sourceText);

      // Place the remaining words in array
      let words = sourceText.split(/\s+/g);

      // Sort the words in alphabetical order
      words.sort();

      //console.log(words);

      // Create an 2D array in which each item is array
      // containing a word and its duplicate count
      let unique = [[words[0], 1]];

      // Keep an index of the unique words
      let uniqueIndex = 0;

      for (let i = 1; i < words.length; i++) {
         if (words[i] == words[i-1]) {
            // Increase the duplicate count by 1
            unique[uniqueIndex][1]++;
         } else {
            // Add a new word to the unique array
            uniqueIndex++;
            unique[uniqueIndex] = [words[i], 1];
         }
      }

      // Sort by descending order of duplicate count
      unique.sort(byDuplicate);

      function byDuplicate(a, b) {
         return b[1] - a[1];
      }
      
      // Keep the Top 100 words
      unique = unique.slice(0, 100);

      // Find the duplicates of the most-repeated word
      let maxCount = unique[0][1];

      // Sort the word list in alphabetic order
      unique.sort();
      
      /*
      for (let i = 0; i < unique.length; i++) {
         console.log(unique[i]);
      }
      */

      // Reference the word cloud box
      let cloudBox = document.getElementById("wc_cloud");
      cloudBox.innerHTML = "";

      // Size each word based on its usage
      for (let i = 0; i < unique.length; i++) {
         let word = document.createElement("span");
         word.textContent = unique[i][0];
         word.style.fontSize = unique[i][1] / maxCount + "em";
         cloudBox.appendChild(word);

      }
      let trialStart = new Date();

      let expireDate = new Date();
      let nextMonth = expireDate.getMonth() + 1;
      expireDate.setMonth(nextMonth);

      console.log(expireDate.toString());

      /*
      function highlight(strings, ...values) {
         return strings.reduce((result, str, i) => {
           const value = values[i] ? values[i].toUpperCase() : '';
           return result + str + value;
         }, '');
       }
      */
      function highlight(literals, ...substitutions) {
         let result = "";
         for (let i = 0; i < substitutions.length; i++) {
            result += literals[i];
            result += substitutions[i].toUpperCase();
         }
         return result;
      }
       let group1 = "none";
       let group2 = "all";

      console.log(highlight`with malice towards ${group1} and charity for ${group2}`);

      console.log("In the course of events".indexOf("course"));

      let regx = new RegExp("\\d{5}-\\d{4}", "g");
      //let regx = new RegExp(/\d{5}-\d{4}/g);
       console.log(regx.test("12345-6789"));

       let x = [8, 45, 1, 32, 12, 5]; 
       x.sort();
       console.log(x);
      // return "with malice towards NONE and charity for ALL"
      /*
      let names = "Levi Hung, Cathy Li, Verina Hung";
      let re = /(\w+)\s(\w+),?/g;
      let names2 = names.replace(re, "$2, $1; ");
      console.log(names2);

      let x = [45, 3, 1234, 24];
      x.sort(ascending);   // returns [3, 24, 45, 1234]

      sort(compare)

      function ascending(a, b) {
         return a - b;
      }

      array.splice(start, size, values)

      Math.max(...[3, 8, 2, 4, 6]) // return 8
      Math.min.apply(null, array)
      
      let x1 = [1, 2, 3];
      let x2 = [4, 5];
      let allX = [...x1, ...x2]; // return [1,2,3,4,5]

      lowest + size * Math.random()

      function randOrder() {
         return 0.5 - Math.random();
      }

      let orderDate = new Date("May 23, 2024 14:35:05")

      let today = new Date();

      Date.toLocaleString()

      $(placeholder)

      */
      /*
      let patternTest = "/^\d{10}$/";
      let regx = new RegExp(patternTest, "g");
      let res = "We will rock you!".substr(-9, 4)
      console.log(res);
      "Abraham Linconln".substring(-7) // "Abraham Linconln"
      let array = string.split(text);
      /pattern/

      /^(\d{3}-)?\d{3}-\d{4}$/

      let regx = new RegExp(pattern, flags);

      re.test(str)

      let digits = "12345";
      let regx = /^\d{5}$/;
      let testValue = regx.test(digits);
      str.replace(re, newsubstr)

      let oldtext = "1st Inaugural";
      oldtext.replace(/1st/g, "First");

      let array = str.match(re);

      let words = "with malice towards none.".split(/\s+/g);
      // words = ["with", "malice", "towards", "none"]
      */
   }

};





















/*--- ----------------------------------------------*/
/* Array of words to NOT include in the word cloud */
/*-------------------------------------------------*/

let stopWords = ["a", "about", "above", "across", "after", "afterwards", "again", "against", 
                 "ago", "all", "almost", "alone", "along", "already", "also", "although", 
                 "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", 
                 "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", 
                 "are", "around", "as", "at", "back", "be", "became", "because", "become", 
                 "becomes", "becoming", "been", "before", "beforehand", "behind", "being", 
                 "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", 
                 "but", "by", "call", "came", "can", "cannot", "cant", "case","cases","cause", 
                 "co", "computer", "con", "could", "couldnt", "cry", "de", "describe", "detail", 
                 "do", "does", "doing", "done", "down", "due", "during", "each", "eg", "eight", 
                 "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", 
                 "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fie",
                 "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", 
                 "formerly", "forty", "found", "four", "from", "front", "full", "further", 
                 "get", "give", "go", "had", "has", "hasnt", "have", "he", "held", "having", 
                 "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", 
                 "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie", 
                 "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", 
                 "keep", "know", "knows", "knew", "last", "latter", "latterly", "least", "less", 
                 "let", "ltd", "made", "make","many", "may", "me", "meanwhile", "might", "mill", 
                 "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", 
                 "myself", "name", "namely", "neither", "never", "nevertheless", "next", 
                 "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", 
                 "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", 
                 "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", 
                 "own", "part", "per", "perhaps", "plainly", "please", "precisely", "put", 
                 "rather", "re", "same", "said", "say", "says", "see", "seem", "seemed", 
                 "seeming", "seems", "serious", "several", "shall", "she", "should", "show", 
                 "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", 
                 "something", "sometime", "sometimes", "somewhere", "st", "sts", "still", "such", 
                 "system", "take", "ten", "th", "ths", "thx", "than", "that", "the", "their", 
                 "them", "themselves", "then", "thence", "there", "thereafter", "thereby", 
                 "therefore", "therein", "thereupon", "these", "they", "thick", "thin", 
                 "third", "this", "those", "though", "three", "through", "throughout", 
                 "thru", "thus", "to", "together", "too", "top", "toward", "towards", 
                 "twelve", "twenty", "two", "un", "unless", "under", "until", "up", 
                 "upon", "us", "very", "via", "was", "we", "well", "were", "weve", "what", 
                 "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", 
                 "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", 
                 "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", 
                 "with", "within", "without", "would", "year", "years", "yet", "you", 
                 "your", "yours", "yourself", "yourselves"];
                 