"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Levi Hung
    Date:   11/27/2024

    Filename: js12.js
*/

// Run once the page is loaded and ready
$( () => {

    $("div#description")
    .fadeOut(1000, () => { 
        $("div#description").text("Adventure awaits!")
    })
    .fadeIn(1000);

    // Animate the h1 heading
    $("section > h1").css( {
        fontSize: 0,
        opacity: 0
    })
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 2000);

    // Reveal the questions when the page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 2000);

    // Add click events to each question in the FAQ
    $("dl#faq dt").click( e => {
        // Alternate between hiding and showing the answer
        let question = $(e.target);
        let answer = $(question.next());

        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
            // $(answer).hide(600);
            $(answer).slideUp(600);
        } else {
            //$(answer).show(600);
            $(answer).slideDown(600);
            //$(answer).slideDown(600).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
    });
});

