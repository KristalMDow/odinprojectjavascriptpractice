const sumAll = function(numberA, numberB) {
    let total = 0;
    let timesToLoop = 0;

    if (numberA < 0 || numberB < 0 || typeof numberA != "number" || typeof numberB != "number"){
        return "ERROR";
    } else {
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
