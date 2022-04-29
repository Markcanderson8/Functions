// create a function that returns true if a piece of text is a palindrome
// or false if it isn't
const prompt = require("prompt-sync")();

let text = new String();
text = prompt("Enter text: ");

function getPalindrome(text) {
  let revText = new String();
  for (let i = text.length - 1; i >= 0; i--) {
    revText += text[i];
  }
  if (revText === text) {
    return true;
  } else {
    return false;
  }
}

let ans = getPalindrome(text);
console.log(ans);
