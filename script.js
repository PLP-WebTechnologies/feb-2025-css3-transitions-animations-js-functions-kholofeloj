const quotes = [
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The harder you work for something, the greater you'll feel when you achieve it."
  ];

  const quoteElement = document.getElementById('quote');
  const favQuote = document.getElementById('favouriteQuote');
  const newQuoteBtn = document.getElementById('newQuote');
  const saveFavouriteBtn = document.getElementById('saveQuote');

  // Function to generate a random quote
  function generateRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  // Display a random quote with animation
  function showNewQuote() {
    const quote = generateRandomQuote();
    quoteElement.textContent = quote;
    //reset animation
    quoteElement.classList.remove('quote-text');
    void quoteElement.offsetWidth;
    quoteElement.classList.add('quote-text');
  }

  // Save the current quote as a favourite
  function saveFavourite() {
    const currentQuote = quoteElement.textContent;
    localStorage.setItem('favouriteQuote', currentQuote);
    favQuote.textContent = currentQuote;

    alert('Quote saved as favourite ❤️!');
  }

  // Load the favourite quote from localStorage on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedQuote = localStorage.getItem('favouriteQuote');
    if (savedQuote) {
      favQuote.textContent = savedQuote;
    }
  });


newQuoteBtn.addEventListener('click', showNewQuote);
saveFavouriteBtn.addEventListener('click', saveFavourite);