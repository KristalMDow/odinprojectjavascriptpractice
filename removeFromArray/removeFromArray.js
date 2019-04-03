/* 
* removeFromArray - Solution by Kristal M. Dow 03042019
* Accepts an array and any number of items to remove from said array, using optional multiple arguments.
* Removes requested items from the submitted array.
*/

const removeFromArray = function(submittedArray, ...elementToRemove) {
    let modifiedArray = submittedArray;

    // Loop through array of elements to remove.
    for (let j=0; j < elementToRemove.length; j++){
        // For every element to remove, loop through the submitted array. If they match, remove that element.
        for (let i=0; i < modifiedArray.length; i++){
            if (modifiedArray[i] == elementToRemove[j]) {
                modifiedArray.splice(i, 1);
            }
        }
    }
    
    return modifiedArray;
}

module.exports = removeFromArray
