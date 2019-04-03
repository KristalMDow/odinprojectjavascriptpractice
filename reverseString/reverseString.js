const reverseString = function(wordToReverse) {

    let wordArray = Array.from(wordToReverse);
    let reversedWord = "";
    let arrayLength = wordArray.length;

    for (let i=0; i < arrayLength; i++){
        reversedWord = reversedWord + wordArray.pop();
    }
    
    return reversedWord;
}

module.exports = reverseString
