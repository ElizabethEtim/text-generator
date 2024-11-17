// Array of sample words
const words = ["apple", "sky", "dream", "ocean", "spark", "echo", "wave", "glow", "shadow", "light"];

// Array of sample sentences
const sentences = [
  "The sun sets beautifully over the horizon.",
  "An apple a day keeps the Doctor away.",
  "The beautiful spark in her eyes was just amazing",
  "A gentle breeze sweeps across the field of flowers.",
  "Raindrops danced on the roof, creating a soothing melody.",
  "She found herself lost in the pages of her favorite book.",
  "The stars twinkled like diamonds in the night sky."
];

// Array of sample paragraphs
const paragraphs = [
  "The little boy loves shouting in an empty room. This is because he loved hearing the resounding echo of his voice",
  "A very much admired castle stands elegantly in the middle of the ancient city. The evening sun casts beautiful shadows of the elegant castle ",
  "Where there is inner light, there is outer glow. Then everything beneath the sky that you try will always grow."
];

// Function to generate random word, sentence, or paragraph
function generateText(type) {
  const output = document.getElementById("output-text");
  if (type === "word") {
    output.textContent = words[Math.floor(Math.random() * words.length)];
  } else if (type === "sentence") {
    output.textContent = sentences[Math.floor(Math.random() * sentences.length)];
  } else if (type === "paragraph") {
    output.textContent = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  }
}

// Event listeners for buttons
document.getElementById("word-btn").addEventListener("click", () => generateText("word"));
document.getElementById("sentence-btn").addEventListener("click", () => generateText("sentence"));
document.getElementById("paragraph-btn").addEventListener("click", () => generateText("paragraph"));