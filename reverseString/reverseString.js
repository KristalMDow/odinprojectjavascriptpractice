/* 
* reverseString - Solution by Kristal M. Dow 03042019
* Reverses a submitted string. Accepts a string, puts each character into an array, pops off the last character and 
* concatenates it onto a string to reverse it.
*/

const reverseString = function(wordToReverse) {
    let wordArray = Array.from(wordToReverse); // Puts the word into the array, character by character.
    let reversedWord = "";
    let arrayLength = wordArray.length; // Put this into a value so that it is a fixed number (doesn't change as array changes).

    // Pops off the last character in the array and concatenates it onto the reversed word.
    for (let i=0; i < arrayLength; i++){
        reversedWord = reversedWord + wordArray.pop();
    }
    
    return reversedWord;
}

module.exports = reverseString
