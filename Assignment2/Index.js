// Given a string s, find the ASCII value of each character iteratively.
// If the ASCII value is even, increment the next character by
// (ASCII_value % 7). If the ascii value is odd, decrement the previous
// character by (ASCII_value % 5). Output the newly formed string.
// Note:
// If a character has already been changed once, do not change that character
// again.
// If the new number is an invalid ASCII value, replace it with 83.
// Eg.

// s: sHQen}
// ASCII: 115-72-81-101-110-125

// First pass (115): No previous character.
// 	115-72-81-101-110-125
// Second pass (72): Increment the next character by (72%7)
// 	115-72-83-101-110-125
// Third pass(83): Decrement previous character by (83%5)
// 	115-69-83-101-110-125
// Fourth pass (101): Previous character already changed once.
// 	115-69-83-101-110-125
// Fifth pass(110): Invalid ASCII value.
// 	115-69-83-101-110-83
// Sixth pass(83):
// 	115-69-83-101-107-83

// Final Answer:
// 	115-69-83-101-107-83 => sESekS

let string = "sHQen}";

string = string.split("");
let arr = string;
// let arr = Array(string.length).fill(0);

function newString(string) {
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i].charCodeAt(0) > 64 && string[i].charCodeAt(0) < 91) ||
      (string[i].charCodeAt(0) > 96 && string[i].charCodeAt(0) < 123)
    ) {
      if (string[i].charCodeAt(0) % 2 === 0) {
        if (arr[i + 1] === string[i + 1] && i + 1 < string.length) {
          arr[i + 1] = String.fromCharCode(
            string[i + 1].charCodeAt(0) + (string[i].charCodeAt(0) % 7)
          );
          arr[i + 1] = string[i + 1];
        }
      } else {
        if (arr[i - 1] === string[i - 1] && i - 1 >= 0) {
          arr[i - 1] = String.fromCharCode(
            string[i - 1].charCodeAt(0) - (string[i].charCodeAt(0) % 5)
          );
          arr[i - 1] = string[i - 1];
        }
      }
    } else {
      arr[i] = "S";
    }
  }
  console.log(arr.join(""));
}
newString(string);
