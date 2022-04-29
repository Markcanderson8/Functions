// Write a function that takes a string of text and
// returns the longest word with an even number of
// letters and if there's no even length return "00"
const prompt = require("prompt-sync")();

let text = prompt("Enter text: ");

function returnStringOr00(text) {
  let ifEven = false;
  let newArr = text.split(" ", text.length);
  let max = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    let length = newArr[i].length;
    if (length % 2 == 0) {
      if (max.length < newArr[i].length) {
        ifEven = true;
        max = newArr[i];
        return newArr[i];
      }
    }
  }
  if (!ifEven) {
    return "00";
  }
}

let answer = returnStringOr00(text);
console.log(answer);
