// Write a function that takes in a string of one or more words,
// and returns the same string,
// but with all five or more letter words reversed. S
// strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

export const spinWords = function spinWords(input) {
  return input.replace(/\w{5,}/g, (s) =>  s.split('').reverse().join(''));
};

export default spinWords;
