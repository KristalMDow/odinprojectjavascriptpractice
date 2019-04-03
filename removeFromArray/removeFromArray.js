const removeFromArray = function(submittedArray, ...elementToRemove) {
    let modifiedArray = submittedArray;

    for (let j=0; j < elementToRemove.length; j++){
        for (let i=0; i < modifiedArray.length; i++){
            if (modifiedArray[i] == elementToRemove[j]) {
                modifiedArray.splice(i, 1);
            }
        }
    }
    

    return modifiedArray;
}

module.exports = removeFromArray
