// Given a string s and a number x, print the shortest substrings which start and end with the same character and
// have lengths greater than or equal to x. If multiple substrings exist with the same shortest length, print them all.

// Eg:
// s: abccdbacca
// x: 3		Answer: acca
// x: 4		Answer: acca
// x: 5		Answer: bccdb cdbac
// x: 6 	Answer:  abccdba
// x: 7		Answer: abccdba
// x: 8		Answer: not-found

let s = "abccdbacca";

function shortSubstrings(s, x) {
  let arr = [];
  let ans = [];
  let flag = false;

  while (x < s.length) {
    arr = [];
    for (let i = 0; i < x; i++) {
      arr.push(s[i]);
    }
    for (let i = x; i <= s.length; i++) {
      if (arr[0] === arr[arr.length - 1]) {
        ans.push(arr.join(""));
        flag = true;
      }
      arr.shift();
      arr.push(s[i]);
    }
    x++;
    if (flag === true) {
      break;
    }
  }
  if (flag === true) {
    console.log(ans.join(" "));
  } else {
    console.log("not-found");
  }
}
shortSubstrings(s, 3);
shortSubstrings(s, 4);
shortSubstrings(s, 5);
shortSubstrings(s, 6);
shortSubstrings(s, 7);
shortSubstrings(s, 8);
