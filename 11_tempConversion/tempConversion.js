const convertToCelsius = function (temp) {
  const convertedTemp = (temp - 32) * (5 / 9);
  return Math.floor(convertedTemp) === convertedTemp
    ? convertedTemp
    : parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const convertedTemp = temp * (9 / 5) + 32;
  return Math.floor(convertedTemp) === convertedTemp
    ? convertedTemp
    : parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
