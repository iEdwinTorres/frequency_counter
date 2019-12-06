document.getElementById("countButton").onclick = function() {
let typedText = document.getElementById("textInput").value;

typedText = typedText.toLowerCase();

typedText = typedText.replace(/[^a-z'\s]+/g, "");

const letterCounts = {};

for (let i = 0; i < typedText.length; i++) {
   currentLetter = typedText[i];
   if(letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
   } else {
      letterCounts[currentLetter]++;
   }
}

for (let letter in letterCounts) {
   const span = document.createElement("span");
   const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
   span.appendChild(textContent);
   document.getElementById("lettersDiv").appendChild(span);
}

const Words = typedText.split(" ");
const wordsCounts = {}

for (let i = 0; i < Words.length; i++) {
   currentWord = Words[i];
   if(wordsCounts[currentWord] === undefined) {
      wordsCounts[currentWord] = 1;
   } else {
      wordsCounts[currentWord]++;
   }
}

for (let words in wordsCounts) {
   const span = document.createElement("span");
   const textContent = document.createTextNode('"' + words + "\": " + wordsCounts[words] + ", ");
   span.appendChild(textContent);
   document.getElementById("lettersDiv").appendChild(span);

}
}