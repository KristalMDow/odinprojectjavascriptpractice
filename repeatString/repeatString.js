/* 
* repeatString - Solution by Kristal M. Dow 03042019
* Takes two parameters - a string to repeat and the number of times it needs to be repeated. Concatenates string together
* requested number of times. Basic error handling included.
*/

const repeatString = function(stringToRepeat, timesRepeated) {
    let outputString = "";
    
    if (timesRepeated >= 0){
        for (var i = 0; i<timesRepeated; i++){
            outputString += stringToRepeat;
        }
    } else {
        outputString = "ERROR";
    }
    
    return outputString;
}

module.exports = repeatString
