/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:



*/
//
//split the sentence into array
//make lower case
//modify with filter
//get rid of words with 'e'
//return joined sentence

let removeEWords = function(sentence) {
  const words = sentence.split(' ');
  const filteredWords = words.filter(word => !word.includes('e'));
  return filteredWords.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
