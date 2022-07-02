// Given a string s, find the ASCII value of each character iteratively. If the ASCII value is even, increment the next character by (ASCII_value % 7). If the ascii value is odd, decrement the previous character by (ASCII_value % 5). Output the newly formed string. 
// Note:
// If a character has already been changed once, do not change that character again. 
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
