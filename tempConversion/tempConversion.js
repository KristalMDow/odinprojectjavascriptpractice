const ftoc = function(inputTemp) {
  let celsiusTemp = 0;

  celsiusTemp = (inputTemp-32) * (5/9)

  if (celsiusTemp % 1 != 0){
    celsiusTemp = parseFloat(celsiusTemp.toFixed(1));
  }

  return celsiusTemp;
}

const ctof = function(inputTemp) {
  let farenheitTemp = 0;

  farenheitTemp = (inputTemp*(9/5))+32;

  if (farenheitTemp % 1 != 0){
    farenheitTemp = parseFloat(farenheitTemp.toFixed(1));
  }

  return farenheitTemp;
}

module.exports = {
  ftoc,
  ctof
}
