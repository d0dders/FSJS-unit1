/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "May the Force be with you.",
    source: "General Dodonna",
    citation: "Star Wars",
    year: "1977"
  },
  {
    quote: "There's no place like home.",
    source: "Dorothy",
    citation: "The Wizard of Oz,",
    year: "1939"
  },
  {
    quote: "I'm the king of the world!",
    source: "Jack Dawson",
    citation: "Titanic",
    year: "1997"
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "John Keating",
    citation: "Dead Poets Society",
    year: "1989"
  },
  {
    quote: "You're gonna need a bigger boat.",
    source: "Chief Brody",
    citation: "Jaws",
    year: "1975"
  },
  {
    quote: "It's alive! It's alive!",
    source: "Henry Frankenstein",
    citation: "Frankenstein",
    year: "1931"
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forest Gump",
    citation: "Forest Gump",
    year: "1994"
  },
  {
    quote: "I'll be back.",
    source: "T-800",
    citation: "The Terminator",
    year: "1984"
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);