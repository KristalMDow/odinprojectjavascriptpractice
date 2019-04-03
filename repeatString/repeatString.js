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
