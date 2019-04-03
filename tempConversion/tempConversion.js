/* 
* tempConversion - Solution by Kristal M. Dow 03042019
* Converts farenheit to celsius and vice versa. Multiple functions. Using simple math and handling floating numbers.
*/

const ftoc = function(inputTemp) {
  let celsiusTemp = 0;

  // Conversion formula.
  celsiusTemp = (inputTemp-32) * (5/9)

  // IF there is a floating point, we round to one decimal place. Otherwise we have our neat round number with no decimal.
  if (celsiusTemp % 1 != 0){
    celsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  }

  return celsiusTemp;
}

const ctof = function(inputTemp) {
  let farenheitTemp = 0;

  // Conversion formula.
  farenheitTemp = (inputTemp*(9/5))+32;

  // IF there is a floating point, we round to one decimal place. Otherwise we have our neat round number with no decimal.
  if (farenheitTemp % 1 != 0){
    farenheitTemp = parseFloat(farenheitTemp.toFixed(1));
  }

  return farenheitTemp;
}

module.exports = {
  ftoc,
  ctof
}
