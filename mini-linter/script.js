let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];

// Break story into individual words.
const storyWords = story.split(" ");

// Find number of words.
const numOfWords = storyWords.length;
// console.log(`There are ${storyWords.length} words.`);

// Remove words in overusedWords array and store in betterWords.
const betterWords = storyWords.filter(
  (word) => !unnecessaryWords.includes(word)
);

// Count how often words in overusedWords appear...
const overused = {
  really: 0,
  very: 0,
  basically: 0,
};

betterWords.forEach((word) => {
  if (overusedWords.includes(word)) {
    overused[word]++;
  }
});

// Count the number of sentences.
const sentenceCounter = (text) => {
  let sentences = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i].charAt(text[i].length - 1) === "." ||
      text[i].charAt(text[i].length - 1) === "!"
    ) {
      sentences++;
    }
  }
  return sentences;
};

const relayTextInfo = () => {
  console.log(
    `Here is the text, minus unnecessary words:\n\n${betterWords.join(" ")}\n`
  );
  console.log(
    `There are ${sentenceCounter(
      betterWords
    )} sentences in the text, composed of ${numOfWords} words.\n`
  );
  console.log(
    `Amongst that, there are some overused words. Specifically:\n\t'really' appears ${overused.really} time(s);\n\t'very' appears ${overused.very} time(s);\n\t'basically' appears ${overused.basically} time(s).`
  );
};

relayTextInfo();
