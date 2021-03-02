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
    year: "1977",
    rating: 5
  },
  {
    quote: "There's no place like home.",
    source: "Dorothy",
    citation: "The Wizard of Oz",
    year: "1939",
    rating: 4
  },
  {
    quote: "I'm the king of the world!",
    source: "Jack Dawson",
    citation: "Titanic",
    year: "1997",
    rating: 4
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "John Keating",
    citation: "Dead Poets Society",
    year: "1989",
    rating: 4
  },
  {
    quote: "You're gonna need a bigger boat.",
    source: "Chief Brody",
    citation: "Jaws",
    year: "1975",
    rating: 4
  },
  {
    quote: "It's alive! It's alive!",
    source: "Henry Frankenstein",
    citation: "Frankenstein",
    year: "1931",
    rating: 3
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forest Gump",
    citation: "Forest Gump",
    year: "1994",
    rating: 5
  },
  {
    quote: "I'll be back.",
    source: "T-800",
    citation: "The Terminator",
    year: "1984",
    rating: 4
  }
];

/*** 
 * `quotes` array 
***/
const colors = ['#870A22', '#5F4938', '#0A0408', '#4D4F58', '#124E4A'];


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
function printQuote() {
  const quote = getRandomQuote();
  let html = '';
  html += `<p class="quote">${quote.quote}</p>`;
  html += `<p class="source">${quote.source}`;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  if (!isNaN(quote.rating)) {
    html += `<span class="rating">`;
    for(let i = 1; i <= quote.rating; i++) {
      html += `&#9733;`; 
    }
    html += `</span>`;
  }
  html += `</p>`;


  document.getElementById('quote-box').innerHTML = html; 
  document.body.style.backgroundColor = getRandomColor();
}

/***
 * `getRandomColor` function
***/
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//Load a quote as soon as the page loads
printQuote();
//Set the quote to change every 10 secs
setInterval(function(){ printQuote(); }, 10000);