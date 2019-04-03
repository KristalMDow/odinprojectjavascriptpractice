/* 
* leapYears - Solution by Kristal M. Dow 03042019
* Accepts an inputted year and determines if it is a leap year using a given ruleset.
*/

const leapYears = function(inputYear) {
    // Default option is false, as most years are not leap years.
    let isLeapYear = false;

    // Logic to determine if submitted year is a leap year.
    // Year must be divisible by 4, but not 100, with the exception of 400.
    if (inputYear % 4 == 0 && (inputYear % 100 != 0 || inputYear % 400 == 0))
    {
        isLeapYear = true;
    }
    
    return isLeapYear;
}

module.exports = leapYears
