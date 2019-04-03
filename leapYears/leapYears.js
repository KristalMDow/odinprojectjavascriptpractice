const leapYears = function(inputYear) {
    let isLeapYear = false;
    if (inputYear % 4 == 0 && (inputYear % 100 != 0 || inputYear % 400 == 0))
    {
        isLeapYear = true;
    }
    return isLeapYear;
}

module.exports = leapYears
