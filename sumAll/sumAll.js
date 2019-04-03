/* 
* sumAll - Solution by Kristal M. Dow 03042019
* Takes two numbers, finds the lowest, and adds every number until it reaches the highest. Also includes basic 
*  error handling.
*/

const sumAll = function(numberA, numberB) {
    let total = 0;
    let timesToLoop = 0;

    // Checks for cases in which the submitted arguments are not suitable for this task. Returns error if so.
    if (numberA < 0 || numberB < 0 || typeof numberA != "number" || typeof numberB != "number"){
        return "ERROR";
    } else {
        // Finds lowest number. Determines number of times to loop by subtracting one from the other. Increases 
        //  lowest number incrementally and adds it until highest number is reached. Returns result.

        if (numberA > numberB){
            timesToLoop = numberA - numberB;
            total = numberB;
            for (let i=0; i < timesToLoop; i++){
                numberB++;
                total += numberB;
            }
        } else {
            timesToLoop = numberB - numberA;
            total = numberA;
            for (let i=0; i < timesToLoop; i++){
                numberA++;
                total += numberA;
            }
        }    
    }

    return total;
}

module.exports = sumAll
