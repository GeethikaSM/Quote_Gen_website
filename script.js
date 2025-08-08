
const quotes = {
  MotivationalandInspirational: [
    { quote: "Happiness is a warm puppy.", author: "Charles M. Schulz" },
    { quote: "Smile, and the world smiles with you.", author: "Unknown" },
    { quote: "Count your life by smiles, not tears.", author: "John Lennon" }
  ],
  HumurousandLighthearted: [
    { quote: "Tears come from the heart, not from the brain.", author: "Leonardo da Vinci" },
    { quote: "Heavy hearts, like heavy clouds, are best relieved by letting a little water fall.", author: "Christopher Morley" },
    { quote: "The word ‘happy’ would lose its meaning if it were not balanced by sadness.", author: "Carl Jung" }
  ],
  RomanticandLoveFilled: [
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
  ],
  ReflectiveandPhilosophical: [
    { quote: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { quote: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
    { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" }
  ],
  CalmingandPeaceful: [
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { quote: "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’", author: "C.S. Lewis" },
    { quote: "True friends are never apart, maybe in distance but never in heart.", author: "Helen Keller" }
  ]
};


const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");


const params = new URLSearchParams(window.location.search);
const mood = params.get("mood");

function getRandomQuote(moodType) {
  const moodQuotes = quotes[moodType];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  return moodQuotes[randomIndex];
}


if (mood && quotes[mood]) {
  const selected = getRandomQuote(mood);
  quoteText.textContent = `"${selected.quote}"`;
  authorText.textContent = `- ${selected.author}`;
}


newQuoteBtn.addEventListener("click", () => {
  if (mood && quotes[mood]) {
    const selected = getRandomQuote(mood);
    quoteText.textContent = `"${selected.quote}"`;
    authorText.textContent = `- ${selected.author}`;
  }
});
